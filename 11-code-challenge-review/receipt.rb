class Receipt
  attr_accessor :member, :book

  @@all = []

  def initialize(member, book)
    @member = member
    @book = book
    @@all << self
  end

  def self.all
    @@all
  end
end
