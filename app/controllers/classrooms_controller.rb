class ClassroomsController < ApplicationController
	def index
		@class_rooms = @current_user.classrooms
		if @class_rooms && @class_rooms.size>0
			redirect_to classroom_path @class_rooms[0]
		else
			flash[:msg] = "You're not registered to any classes!"
			redirect_to new_classroom_path
		end
	end

	def new
	end

	def create
		if @current_user.can_create_class?
			if Classroom.find_by_name params[:classroom][:name]
				flash[:msg] = "Class already exists"
			else
				class_room = @current_user.classrooms.build params[:classroom]
				#random string algo from http://stackoverflow.com/questions/88311/how-best-to-generate-a-random-string-in-ruby
				o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
				string = (0...7).map { o[rand(o.length)] }.join
				class_room.class_key = string
				class_room.save!

				registration = Classregistration.new :classregistration_type => Classregistration.admin_type
				@current_user.classregistrations<<registration;
				class_room.classregistrations<<registration;
				flash[:msg] = "Created class and registered to it!"
			end
		end
		redirect_to :back
	end

	def show
		@classroom = @current_user.classrooms.find_by_id params[:id]
		if !@classroom
			flash[:msg] = "No such class"
			redirect_to :back and return
		end

		@classregistration = @current_user.classregistrations.find_by_classroom_id @classroom
		regtype = @classregistration.classregistration_type
		if regtype == Classregistration.admin_type
			@classmembers = @classroom.classregistrations
		elsif regtype == Classregistration.student
			redirect_to editall_classroom_virtueentries_path(@classroom, Date.today)
		else
			flash[:msg] = "Your instructor hasn't approved you to this class yet"
			redirect_to new_classroom_path
		end
	end

	def register
		class_room = Classroom.find_by_name params[:classroom][:name]
		if !class_room
			flash[:msg] = "No such classroom"
		elsif @current_user.classrooms.find_by_id class_room
			flash[:msg] = "You're alredy registered to this class!"
		else
			registration = Classregistration.new :classregistration_type => Classregistration.student_pending_approval
			@current_user.classregistrations<<registration
			class_room.classregistrations<<registration

			flash[:msg] = "Registered to class "+class_room.name+". Approval of instructor pending"
		end
		redirect_to :back
	end

  def edit
    @classroom = @current_user.classrooms.find_by_id params[:id]
    if !@classroom
      flash[:msg] = "No such classroom exists"
    else
      flash[:msg] = "Editing for approval "+params[:id]
      @current_user = User.find params[:param2]
      if @current_user
        @classregistration = @current_user.classregistrations.find_by_classroom_id @classroom
        @classregistration.classregistration_type = Classregistration.student
        @classregistration.save!

        flash[:msg] = "Student "+@current_user.first_name+" approved for this class"
      else
        flash[:msg] = "Student doesn't exist"
      end
    end
    redirect_to :back
  end
end
