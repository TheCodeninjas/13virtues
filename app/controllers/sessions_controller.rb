class SessionsController < ApplicationController
	skip_before_filter :set_current_user, :only=>[:index, :create]
	def index
		user = User.find session[:user] if session[:user]
		redirect_to user_path user if user
	end

	def create
		@id = params[:session][:id]
		@user = User.find_by_email(@id)
		unless @user then
			flash[:msg] = "Authentication Failure!"
			redirect_to sessions_path
		else
			session[:user] = @user.id
			@current_user = @user
			redirect_to user_path @current_user
		end
	end

	def destroy
		session[:user] = nil
		flash[:msg] = "You're signed out"
		redirect_to sessions_path
	end
end
