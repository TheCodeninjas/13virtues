class StatisticsController < ApplicationController
	before_filter :check_classroom_user

	def index
		week = (Date.today-@classroom.startdate)/7
		week = week.to_i

		@violations = Array.new(week+2) { Array.new(week+2, 0) }#[week][13]
		@violations[0][0] = 'Week'

		(1..week+1).to_a.each do|virt|
			@violations[0][virt] = Virtueentry.vdesc(virt)
		end

		(1..week+1).to_a.each do|wk|
			@violations[wk][0] = 'Week '+wk.to_s
		end
#		(0..week).to_a.each do|wk|
#			(0..12).to_a.each do|i|
#				@violations[wk][i] = 0
#			end
#		end

		(1..week+1).to_a.each do|wk|
			st_date = @classroom.startdate+(wk-1)*7
			en_date = st_date+6

			(1..week+1).to_a.each do|i|
				if @classregistration.classregistration_type == Classregistration.admin_type
					viols = @classroom.virtueentries.find_all_by_v_id_and_date i, st_date..en_date
				else
					viols = @classregistration.virtueentries.find_all_by_v_id_and_date i, st_date..en_date
				end
				viols.each do |viol|
					@violations[wk][i] += viol.violation_count if viol.violation_count
				end
			end
		end
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
