class VirtueentriesController < ApplicationController
	before_filter :check_classroom_user

	def index
		@entries=@classregistration.virtueentries
	end

	def new
		@entries = Array.new(@week) { @classregistration.virtueentries.build }
		@notes = Array.new(@week) { Note.new }
	end

	def create
		params[:entries].each_value do |entry|
			cr = @classregistration.virtueentries.create(entry.except 'note')
			if entry[:note]
				cr.note = Note.new(:note=>entry['note'])
				cr.save!
			end
		end

		redirect_to :back
	end

  def destroy
    @entries_to_be_del = @classregistration.virtueentries
    @entries_to_be_del.delete_all
    logger.warn "Entries Deleted!"
    redirect_to classroom_path(@classroom)
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
		@week = ((Date.today-@classroom.startdate)/7).to_i + 1
  end

end

