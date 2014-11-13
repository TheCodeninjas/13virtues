class Classroom < ActiveRecord::Base
	has_many :participants
	attr_accessible :startdate, :name
end
