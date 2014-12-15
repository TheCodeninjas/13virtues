root = User.new :email=>'root@admin.com', :first_name=>'root'
root.user_type = User.admin_type
root.password = "root"
root.save!

norm = User.new :email=>'test@testing.com', :first_name=>'test'
norm.user_type = User.non_admin_type
norm.password = "test"
norm.save!
