class ClassroomsController < ApplicationController
	def index
		@class_rooms = @current_user.classrooms
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

		#@classregistration = Classregistration.find_by_user_id_and_classroom_id @current_user, @classroom
		@classregistration = @current_user.classregistrations.find_by_classroom_id @classroom
		if @classregistration.classregistration_type == Classregistration.admin_type
			@classmembers = @classroom.classregistrations
		else
			;#redirect_to classroom_virtueentries_path @classroom

		#@week = ((Date.today-@classroom.startdate)/7).to_i + 1
		#if @week < 1 || @week > 13
		#else
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

			flash[:msg] = "Registered to class "+class_room.name
		end
		redirect_to :back
	end
end
