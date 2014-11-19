class Classregistration < ActiveRecord::Base
	belongs_to :user
	belongs_to :classroom
	has_many :virtueentries
	attr_accessible :classregistration_type

	def self.admin_type
		return 0
	end
	def self.non_admin_type
		return 1
	end
end
