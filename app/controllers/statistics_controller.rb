class StatisticsController < ApplicationController
	before_filter :check_classroom_user

	def index
		days = (Date.today-@classroom.startdate).to_i
		week = days/7

		@violations = Array.new(days+2) { Array.new(week+2, 0) }
		@violations[0][0] = 'Week'

		(1..week+1).to_a.each do|virt|
			@violations[0][virt] = Virtueentry.vdesc(virt)
		end

		(0..days).to_a.each do|d|
			@violations[d+1][0] = (d+1).to_s
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
		#week = (Date.today-@classroom.startdate)/7
		#week = week.to_i
		days = (Date.today-@classroom.startdate).to_i

		#@entries_on = Array.new(week+2) { Array.new(3, 0) }
		#@entries_on[0][0] = 'Week'
		#@entries_on[0][1] = 'Maximum entries'
		#@entries_on[0][2] = 'Actual entries'

		#(1..week+1).to_a.each do|wk|
		#	@entries_on[wk][0] = 'Week '+wk.to_s
		#end

		#(1..week+1).to_a.each do|wk|
		#	st_date = @classroom.startdate+(wk-1)*7
		#	en_date = st_date+6

		#	@entries_on[wk][1] = 7*wk*wk
		#	ents = @classroom.virtueentries.find_all_by_entryon st_date..en_date
		#	@entries_on[wk][2] = ents.count
		#end

		@entries_on = Array.new(days+2) { Array.new(3, 0) }
		@entries_on[0][0] = 'Day'
		@entries_on[0][1] = 'Maximum entries'
		@entries_on[0][2] = 'Actual entries'

		(0..days).to_a.each do|i|
			@entries_on[i+1][0] = (i+1).to_s
			day = @classroom.startdate+i
			week = (i/7)+1
			@entries_on[i+1][1] = week
			ents = @classroom.virtueentries.find_all_by_entryon day
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
