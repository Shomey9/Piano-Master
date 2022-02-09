class CreateUserScores < ActiveRecord::Migration[6.1]
  def change
    create_table :user_scores do |t|
      t.string :username
      t.integer :points

      t.timestamps
    end
  end
end
