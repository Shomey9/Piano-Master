class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.string :username
      t.integer :score

      t.timestamps
    end
  end
end
