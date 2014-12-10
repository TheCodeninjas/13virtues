class Student < ActiveRecord::Base
  has_many :entries

	attr_accessible :name, :email
end
