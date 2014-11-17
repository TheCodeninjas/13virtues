class Classregistration < ActiveRecord::Base
	belongs_to :user
	belongs_to :classroom
	attr_accessible :classregistration_type
end
