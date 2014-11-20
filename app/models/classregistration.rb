class Classregistration < ActiveRecord::Base
	belongs_to :user
	belongs_to :classroom
	has_many :virtueentries
	attr_accessible :classregistration_type

	def self.admin_type
		return 0
	end
	def self.student
		return 1
	end
	def self.student_pending_approval
		return 2
	end
end
