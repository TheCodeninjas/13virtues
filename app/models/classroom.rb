class Classroom < ActiveRecord::Base
	has_many :virtueentries
	has_many :classregistrations
	has_many :users, :through => :classregistrations
	attr_protected :class_key
	attr_accessible :startdate, :name
end
