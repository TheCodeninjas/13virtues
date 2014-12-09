module admin
  class UsersController < ApplicationController
    before_filter :admin_required

    def index
      render :text => 'Hello from the admin panel!'
    end
  
  	skip_before_filter :set_current_user, :only=>[:create]

  	def show
  		@can_create_class = @current_user.can_create_class?
  	end

  	def create
  		@user = User.new params[:user]
  		@user.user_type = User.non_admin_type
  		@user.save!

  		flash[:msg] = "Your account is created!"
  		redirect_to sessions_path
  	end
  end
end
