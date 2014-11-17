class ClassroomsController < ApplicationController
	def create
		class_room = @current_user.classrooms.build params[:classroom]
		#random string algo from http://stackoverflow.com/questions/88311/how-best-to-generate-a-random-string-in-ruby
		o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
		string = (0...50).map { o[rand(o.length)] }.join
		class_room.class_key = string
		class_room.save!

		registration = 
		redirect_to :back
	end
end
