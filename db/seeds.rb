# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
root = User.create :email=>'root', :first_name=>'root'
root.user_type = User.admin_type
root.save!
norm = User.create :email=>'test', :first_name=>'test'
norm.user_type = User.non_admin_type
norm.save!
