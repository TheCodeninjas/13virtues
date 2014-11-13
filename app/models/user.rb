class User < ActiveRecord::Base
	has_many :participants
	has_many :classrooms, :through => :participants

	attr_protected :user_type
	attr_accessible :first_name, :last_name, :email, :uid
end
