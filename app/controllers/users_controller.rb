class UsersController < ApplicationController
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

  def index
    #flash[:msg] = "All users"
    @users = User.all
  end

  def edit
    @classroom = @current_user.classrooms.find_by_id params[:classroom_id]
    if !@classroom
      flash[:msg] = "No classroom itself"
    else
      flash[:msg] = "editing for approval"+params[:id]
      if @current_user
        flash[:msg] = "User present "+@current_user.first_name
      else
        flash[:msg] = "No field2 present "
      end
    end
    redirect_to :back
  end
end
