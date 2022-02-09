class User < ApplicationRecord
    has_many :user_scores
    has_many :scores, through: :user_scores
end
