class Virtueentry < ActiveRecord::Base
	belongs_to :classregistration
	attr_accessible :v_id, :date, :violation_count, :note

	def self.vdesc(id)
		virtues = ["Temperance", "Silence", "Order", "Resolution", "Frugality",
							 "Industry", "Sincerity", "Justice", "Moderation", "Cleanliness",
							 "Tranquility", "Chastity", "Humility"]

		if id<0 || id>=virtues.size
			return "NA"
		else
			return virtues[id]
		end
	end
end
