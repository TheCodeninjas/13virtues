class StatisticsController < ApplicationController
	before_filter :check_classroom_user

	def index
		days = (Date.today-@classroom.startdate).to_i
		week = days/7

		@violations = Array.new(days+2) { Array.new(week+2, 0) }
		@violations[0][0] = 'Day'

		(1..week+1).to_a.each do|virt|
			@violations[0][virt] = Virtueentry.vdesc(virt)
		end

		(0..days).to_a.each do|d|
			@violations[d+1][0] = "Day "+(d+1).to_s
			day = @classroom.startdate+d

			(1..week+1).to_a.each do|i|
				if @classregistration.classregistration_type == Classregistration.admin_type
					viols = @classroom.virtueentries.find_all_by_v_id_and_date i, day
				else
					viols = @classregistration.virtueentries.find_all_by_v_id_and_date i, day
				end

				viols.each do |viol|
					@violations[d+1][i] += viol.violation_count if viol.violation_count
				end
			end
		end
	end

	def entries_on
		user = User.find_by_id params[:user]
		redirect_to :back and return if !user

		if user!=@current_user
			if @classregistration.classregistration_type!=Classregistration.admin_type
				redirect_to :back and return
			end
		else
			user = @current_user
		end

		@ureg = Classregistration.find_by_user_id_and_classroom_id user, @classroom

		if !@ureg || @ureg.classregistration_type == Classregistration.student_pending_approval
			redirect_to :back and return
		end

		days = (Date.today-@classroom.startdate).to_i

		@entries_on = Array.new(days+2) { Array.new(3, 0) }
		@entries_on[0][0] = 'Day'
		@entries_on[0][1] = 'Entries to be made for day'
		@entries_on[0][2] = 'Entries made on day'

		(0..days).to_a.each do|i|
			@entries_on[i+1][0] = "Day "+(i+1).to_s
			day = @classroom.startdate+i
			week = (i/7)+1
			@entries_on[i+1][1] = week
			ents = @ureg.virtueentries.find_all_by_entryon day
			@entries_on[i+1][2] = ents.count
		end
	end

	protected
	def check_classroom_user
		@classroom = Classroom.find_by_id params[:classroom_id]
		if !@classroom
			redirect_to :back and return
		end

		@classregistration = Classregistration.find_by_user_id_and_classroom_id @current_user, @classroom
		if !@classregistration || @classregistration.classregistration_type == Classregistration.student_pending_approval
			redirect_to :back
		end
	end
end
