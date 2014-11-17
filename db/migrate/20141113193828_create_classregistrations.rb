class CreateClassregistrations < ActiveRecord::Migration
  def up
		create_table 'classregistrations' do |t|
			t.references 'user'
			t.references 'classroom'
			t.integer 'classregistration_type'
		end
  end

  def down
		drop_table 'classregistrations'
  end
end
