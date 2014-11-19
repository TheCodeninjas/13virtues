class Virtueentry < ActiveRecord::Base
	belongs_to :classregistration
	attr_accessible :v_id, :date, :violation_count
end
