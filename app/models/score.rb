class Score < ApplicationRecord
    has_many :user_scores
    has_many :users, through: :user_scores
end
