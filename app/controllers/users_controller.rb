class UsersController < ApplicationController
	skip_before_filter :set_current_user, :only=>[:create]
	def show
	end

	def create
		@user = User.create! params[:user]
		flash[:msg] = "You've been registered"
		redirect_to sessions_path
	end

	def show
	end
end