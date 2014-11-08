class EntriesController < ApplicationController
	def new
		@entry = @current_user.entries.find_by_date(Date.today)#@temp.date)
		if @entry
			redirect_to edit_student_entry_path @current_user, @entry
		end
	end

	def edit
	end

	def create
		@temp = @current_user.entries.build(params[:entry])
		@entry = @current_user.entries.find_by_date(@temp.date)
		if @entry
			@entry.update_attributes params[:entry]
		else
			@entry = @temp
			@current_user.entries<<@entry
		end
		#@entry = @current_user.entries.create(params[:entry])

		redirect_to edit_student_entry_path @current_user, @entry
	end
end
