class ApplicationController < ActionController::Base
  protect_from_forgery
	#before_filter :set_current_user

	#protected
	#def set_current_user
	#	@current_user = Student.find session[:user] if session[:user]
	#	unless @current_user
	#		flash[:msg] = "Wrong credentials"
	#		redirect_to logins_path
	#	end
	#end
  protect_from_forgery with: :exception
    helper_method :current_user

    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
  
	before_filter :set_current_user

  def admin?
    session[:admin_user] && (ENV['ADMINS'] || "").split(',').include?(session[:admin_user])
  end
  helper_method :admin?
  
  def admin_required
    redirect_to '/auth/admin' unless admin?
  end
    
	protected
	def set_current_user
		@current_user = User.find session[:user] if session[:user]
		unless @current_user
			flash[:msg] = "Wrong credentials"
			redirect_to root_path
		end
	end
end
