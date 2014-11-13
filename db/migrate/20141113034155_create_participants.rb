class CreateParticipants < ActiveRecord::Migration
  def up
		create_table 'participants' do |t|
			t.references 'user'
			t.references 'classroom'
			t.integer 'participant_type'
		end
  end

  def down
		drop_table 'participants'
  end
end
