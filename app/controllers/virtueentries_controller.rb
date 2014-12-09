class VirtueentriesController < ApplicationController
	before_filter :check_classroom_user

	def index
		@entries=@classregistration.virtueentries.order(:date, :v_id)
	end

	def editall
#    flash[:notice] = "inside editall
    @@date = params[:date].to_date
    if Date.today>= @@date
      @@week = (((params[:date].to_date)-@classroom.startdate).to_i)/7 + 1
      @entries = Array.new(@@week) { @classregistration.virtueentries.build }
      @entries = @classregistration.virtueentries.where(:date => @@date)
#@notes = @entries.note
      if !@entries || @entries.nil? || @entries.empty?
        @entries = Array.new(@@week)  { @classregistration.virtueentries.build  }
      end
      $i=1
      @entries.each do |entry|
        if  $i<=@@week
          entry[:v_id]=$i
          $i=$i+1
        end
      end
    end
  end

	def create
    temp = @classregistration.virtueentries.where(:date => @@date)
    params["entries"].each do |k,v|
        v.each do |key,value|
          if key == "v_id"                                                   #if there is no such virtue with that v_id for that day, then create one
            if temp.where(:v_id => value).blank?                             #http://stackoverflow.com/questions/18082778/rails-checking-if-a-record-exists-in-database
              cr = @classregistration.virtueentries.create(v)  #http://guides.rubyonrails.org/active_record_basics.html
              cr.date = @@date
              cr.save!
            else                                                             #else take that v_id and update the record
              a = temp.where(:v_id => value)
              a.update_all(v)
              break
            end
          end
	      end
    end
    redirect_to :back
  end

  def edit
    @entries = @classregistration.virtueentries
  end

  def update
    @entries = @classregistration.virtueentries.find_by_date @date
    @entries.update_attributes!(params[:virtueentries])
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
		@@week = ((Date.today-@classroom.startdate)/7).to_i + 1
  end

end

