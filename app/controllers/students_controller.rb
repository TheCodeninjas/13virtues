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
		if session[:user] == nil
			redirect_to logins_path
		else
			@user = Student.find(session[:user])
		end
	end
end
