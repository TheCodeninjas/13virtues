class Participant < ActiveRecord::Base
	belongs_to :user
	belongs_to :classroom
	attr_accessible :participant_type
end
