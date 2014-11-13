class CreateUsers < ActiveRecord::Migration
  def up
		create_table 'users' do |t|
			t.string 'first_name'
			t.string 'last_name'
			t.string 'email'
			t.string 'uid'
			t.integer 'type'
		end
  end

  def down
		drop_table 'users'
  end
end
