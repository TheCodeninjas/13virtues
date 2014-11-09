class LoginsController < ApplicationController
	skip_before_filter :set_current_user, :only=>[:index, :create]
	def index
	end

	def create
		@id = params[:login][:id]
		@st = Student.find_by_email(@id)
		unless @st then
			flash[:msg] = "Wrong credentials"
			redirect_to logins_path
		else
			session[:user] = @st.id
			@current_user = @st
			redirect_to student_path @current_user
		end
	end

	def destroy
		session[:user] = nil
		flash[:msg] = "Logged out"
		redirect_to logins_path
	end
end
