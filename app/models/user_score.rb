class UserScore < ApplicationRecord
    belongs_to :users, optional: true
    belongs_to :scores, optional: true
end
