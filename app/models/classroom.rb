class Classroom < ActiveRecord::Base
	has_many :participants
	has_many :users, :through => :participants
	attr_protected :class_key
	attr_accessible :startdate, :name
end
