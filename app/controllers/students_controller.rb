class StudentsController < ApplicationController
	def index
		@students = Student.all
	end

	def new
	end

	def create
		@st = Student.create!(params[:student])
		#redirect_to students_path
		flash[:msg] = "You've been registered!"
		redirect_to logins_path
	end

	def show
			redirect_to new_student_entry_path @current_user
	end
end
