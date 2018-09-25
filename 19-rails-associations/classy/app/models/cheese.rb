class Cheese < ApplicationRecord
  has_many :pairings
  has_many :wines, through: :pairings

  validates :name, uniqueness: true, presence: true
end
