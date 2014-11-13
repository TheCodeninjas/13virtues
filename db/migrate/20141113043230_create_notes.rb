class CreateNotes < ActiveRecord::Migration
  def up
		create_table 'notes' do |t|
			t.references 'virtueentry'
			t.string 'note'
		end
  end

  def down
		drop_table 'notes'
  end
end
