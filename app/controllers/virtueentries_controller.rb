class VirtueentriesController < ApplicationController
	before_filter :check_classroom_user

	def index
    @classregistration = Classregistration.find_by_user_id_and_classroom_id @current_user, @classroom
		if @classregistration.classregistration_type == Classregistration.student
      @entries=@classregistration.virtueentries.order(:date, :v_id)
    else
      flash[:msg] = "Student not yet approved"
      redirect_to :back
    end
	end

	def editall
#    flash[:notice] = "inside editall
    date = params[:date].to_date
    if Date.today>= date && date>=@classroom.startdate
      week = (((params[:date].to_date)-@classroom.startdate).to_i)/7 + 1
      @entries = @classregistration.virtueentries.find_all_by_date date

      if !@entries || @entries.nil? || @entries.empty?
        @entries = Array.new(week)  { @classregistration.virtueentries.build  }
        @entries.each { |en| en.date = Date.today }

        $i=1
        @entries.each do |entry|
          if  $i<=week
            entry[:v_id]=$i
            $i=$i+1
          end
        end
      end
    end
  end

	def create
    params["entries"].each do |k,entry|
      logger.debug("mmmm")
      logger.debug(entry)
      prev = @classregistration.virtueentries.find_by_date_and_v_id(entry["date"], entry["v_id"])
      if prev
#prev.update(entry);
        prev.violation_count = entry["violation_count"]
        prev.note = entry["note"]
        prev.save!
      else
        
        cr = @classregistration.virtueentries.create(entry)  #http://guides.rubyonrails.org/active_record_basics.html
        cr.save!
      end
    end
    redirect_to :back
  end

  def destroy
    @entries_to_be_del = @classregistration.virtueentries
    @entries_to_be_del.each {|entry| entry.destroy}
    logger.warn "Entries Deleted!"
    redirect_to classroom_path(@classroom)
  end

	protected
	def check_classroom_user
		@classroom = Classroom.find_by_id params[:classroom_id]
		if !@classroom
			redirect_to :back and return
		end

		@classregistration = Classregistration.find_by_user_id_and_classroom_id @current_user, @classroom
		if !@classregistration
			redirect_to :back
		end
		@week = ((Date.today-@classroom.startdate)/7).to_i + 1
  end

end

