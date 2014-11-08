class Entry < ActiveRecord::Base
	belongs_to :student
	attr_accessible :date, :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13
end
