class UserScoreSerializer < ActiveModel::Serializer
  attributes :id, :username, :points
end
