class ApplicationController < ActionController::Base
  protect_from_forgery
	before_filter :set_current_user

	protected
	def set_current_user
		@current_user = Student.find session[:user] if session[:user]
		unless @current_user
			redirect_to logins_path
		end
	end
end
