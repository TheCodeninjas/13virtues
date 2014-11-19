class VirtueentriesController < ApplicationController
	before_filter :check_classroom_user

	def index
		@entries=@classregistration.virtueentries
	end

	def new
	end

	def create
		@classregistration.virtueentries.create params[:virtueentry]
		redirect_to 
	end

	protected
	def check_classroom_user
		@classroom = Classroom.find_by_id params[:classroom_id]
		if !@classroom
			redirect_to :back and return
		end

		@classregistration = Classregistration.find_by_user_id_and_classroom_id @current_user, @classroom
		if !@classregistration
			redirect_to :back
		end
	end
end

