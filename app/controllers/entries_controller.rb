class EntriesController < ApplicationController
	def new
	end

	def edit
		redirect_to new_student_entry
	end

	def create
		@current_user.entries<<@current_user.entries.build(params[:entry])
		redirect_to edit_student_entry
	end
end
