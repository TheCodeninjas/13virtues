class User < ActiveRecord::Base
	has_many :classregistrations
	has_many :classrooms, :through => :classregistrations

	attr_protected :user_type
	attr_accessible :first_name, :last_name, :email, :uid
end
