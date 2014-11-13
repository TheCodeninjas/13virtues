class CreateVirtueentries < ActiveRecord::Migration
  def up
		create_table 'virtueentries' do |t|
			t.references 'participant'
			t.integer 'v_id'
			t.date 'date'
			t.boolean 'violated'
		end
  end

  def down
		drop_table 'virtueentries'
  end
end
