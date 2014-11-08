class Entries < ActiveRecord::Migration
  def up
		create_table 'entries' do |t|
			t.date		'date'
			t.boolean 'v1'
			t.boolean 'v2'
			t.boolean 'v3'
			t.boolean 'v4'
			t.boolean 'v5'
			t.boolean 'v6'
			t.boolean 'v7'
			t.boolean 'v8'
			t.boolean 'v9'
			t.boolean 'v10'
			t.boolean 'v11'
			t.boolean 'v12'
			t.boolean 'v13'
		end
  end

  def down
		drop_table 'entries'
  end
end
