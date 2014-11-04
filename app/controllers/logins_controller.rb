class LoginsController < ApplicationController
	def index
	end

	def create
		@id = params[:login][:id]
		@st = Student.where("email = :id", :id => @id)
		if @st.length == 0 then
			redirect_to logins_path
		else
			session[:user] = @st[0]
			redirect_to student_path @st[0]
		end
	end

	def destroy
		session[:user] = nil
		flash[:msg] = "Logged out"
		redirect_to logins_path
	end
end
