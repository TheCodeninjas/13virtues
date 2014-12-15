class ApplicationController < ActionController::Base
  protect_from_forgery
  #before_filter :set_current_user

  #protected
  #def set_current_user
  # @current_user = Student.find session[:user] if session[:user]
  # unless @current_user
  #   flash[:msg] = "Wrong credentials"
  #   redirect_to logins_path
  # end
  #end

  before_filter :set_current_user

  protected
  def authenticate_user
      if session[:user_id]
             # set current user object to @current_user object variable
            @current_user = User.find session[:user_id]
        return true
          else
            redirect_to(:controller => 'sessions', :action => 'login')
            return false
          end
    end
  def save_login_state
      if session[:user_id]
            redirect_to(:controller => 'sessions', :action => 'home')
            return false
          else
            return true
          end
    end
  def set_current_user
    @current_user = User.find session[:user] if session[:user]
    unless @current_user
      flash[:msg] = "Wrong credentials"
      redirect_to root_path
    end

    classes = @current_user.classrooms
    @classroom = classes[0] if classes
    if @classroom
      @classregistration = Classregistration.find_by_user_id_and_classroom_id @current_user, @classroom
    end
  end
end
