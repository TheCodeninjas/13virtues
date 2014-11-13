class CreateClassrooms < ActiveRecord::Migration
  def up
		create_table 'classrooms' do |t|
			t.date 'startdate'
			t.string 'name'
			t.string 'class_key'
		end
  end

  def down
		drop_table 'classrooms'
  end
end
