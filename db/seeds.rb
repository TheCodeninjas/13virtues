root = User.new :email=>'root', :first_name=>'root'
root.user_type = User.admin_type
root.password = "root"
root.save!
