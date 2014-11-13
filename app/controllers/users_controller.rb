class UsersController < ApplicationController
	skip_before_filter :set_current_user, :only=>[:create]
	def show
	end

	def create
		@user = User.new params[:user]
		@user.user_type = 0
		@user.save!

		flash[:msg] = "You've been registered"
		redirect_to sessions_path
	end

	def show
	end
end
