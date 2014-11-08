class EntriesController < ApplicationController
	def new
	end

	def edit
	end

	def create
		#@current_user.entries<<@current_user.entries.build(params[:entry])
		@entry = @current_user.entries.create(params[:entry])
		redirect_to edit_student_entry_path @current_user, @entry
	end
end
