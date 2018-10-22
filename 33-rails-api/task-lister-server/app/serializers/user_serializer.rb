class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :tasks
  has_many :tasks

  class TaskSerializer < ActiveModel::Serializer
    attributes :id, :text, :priority
  end
end
