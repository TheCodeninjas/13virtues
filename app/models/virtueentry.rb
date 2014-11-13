class Virtueentry < ActiveRecord::Base
	belongs_to :participant
	attr_accessible :v_id, :date, :violated
end
