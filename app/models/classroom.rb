class Classroom < ActiveRecord::Base
	has_many :classregistrations
	has_many :users, :through => :classregistrations
	has_many :virtueentries, :through => :classregistrations
	attr_protected :class_key
	attr_accessible :startdate, :name
end
