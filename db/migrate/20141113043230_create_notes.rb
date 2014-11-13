class CreateNotes < ActiveRecord::Migration
  def up
		create_table 'notes' do |t|
			t.references 'participant'
			t.string 'note'
		end
  end

  def down
		drop_table 'notes'
  end
end
