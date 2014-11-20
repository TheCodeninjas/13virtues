class Virtueentry < ActiveRecord::Base
	belongs_to :classregistration
	has_one :note
	attr_accessible :v_id, :date, :violation_count
end
