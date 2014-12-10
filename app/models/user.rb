class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
   devise :database_authenticatable, :registerable,
            :recoverable, :rememberable, :trackable, :validatable, :omniauthable
  has_many :identities
  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
	has_many :classregistrations
	has_many :classrooms, :through => :classregistrations

	attr_protected :user_type
	attr_accessible :first_name, :last_name, :email, :uid

	def can_create_class?
		return true if user_type == User.admin_type
	end

	def self.admin_type
		return 0
	end
	def self.non_admin_type
		return 1
	end
end
