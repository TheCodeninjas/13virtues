class CreateVirtueentries < ActiveRecord::Migration
  def up
		create_table 'virtueentries' do |t|
			t.references 'classregistration'
			t.integer 'v_id'
			t.date 'date'
			t.integer 'violation_count'
		end
  end

  def down
		drop_table 'virtueentries'
  end
end
