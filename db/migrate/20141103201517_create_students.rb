class CreateStudents < ActiveRecord::Migration
  def up
		create_table 'students' do |t|
			t.string 'name'
			t.string 'email'
		end
  end

  def down
		drop_table 'students'
  end
end
