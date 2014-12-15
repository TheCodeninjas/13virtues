class ChangeUsers < ActiveRecord::Migration
  def up
    add_column :users, :salt, :string
    add_column :users, :encrypted_password, :string
  end

  def down
    remove_column :users, :salt
    remove_column :users, :encrypted_password
  end
end
