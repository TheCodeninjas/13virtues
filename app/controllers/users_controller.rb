class UsersController < ApplicationController
	skip_before_filter :set_current_user, :only=>[:create]

	def index
	end

	def show
		#@can_create_class = @current_user.can_create_class?
		redirect_to classrooms_path
	end

	def create
		prev = User.find_by_email params[:user][:email]
		if prev
			flash[:msg] = "There is an account with that email id already!"
			redirect_to sessions_path and return
		end
		@user = User.new params[:user]
		@user.user_type = User.non_admin_type
		@user.save!

		flash[:msg] = "Your account is created!"
		redirect_to sessions_path
	end
end
