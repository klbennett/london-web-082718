class Wine < ApplicationRecord
  belongs_to :region
  has_many :pairings
  has_many :cheeses, through: :pairings
  validates :name, uniqueness: true, presence: true
end
