class User < ActiveRecord::Base
  has_many :classregistrations
  has_many :classrooms, :through => :classregistrations

  attr_protected :user_type
  attr_accessible :first_name, :last_name, :email, :uid, :password, :password_confirmation, :salt
  EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  validates :email, :presence => true, :uniqueness => true, :format => EMAIL_REGEX

  before_save :encrypt_password

  def encrypt_password
      if password.present?
            self.salt = BCrypt::Engine.generate_salt
            self.encrypted_password= BCrypt::Engine.hash_secret(password, salt)
            self.password = nil
      end
  end

  def self.authenticate(email="", login_password="")
      if  EMAIL_REGEX.match(email)
            user = User.find_by_email(email)
      if user && user.match_password(login_password)
            return user
          else
            return false
          end
    end
  end
def match_password(login_password="")
      encrypted_password == BCrypt::Engine.hash_secret(login_password, salt)
    end
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
