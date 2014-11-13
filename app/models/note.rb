class Note < ActiveRecord::Base
	belongs_to 'virtueentry'
	attr_accessible :note
end
