class Member
  attr_accessor :name, :age

  @@all = []

  def initialize(name, age)
    @name = name
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end

  def borrow_a_book(book)
    Receipt.new(self, book)
  end

  def number_of_receipts
    times_borrowed = 0
    Receipt.all.each do |receipt|
      if receipt.member == self
        times_borrowed += 1
      end
    end
    times_borrowed
  end

  def all_books_borrowed
    all_books_borrowed_list = []

    Receipt.all.each do |receipt|
      if receipt.member == self
        all_books_borrowed_list << receipt.book
      end
    end

    all_books_borrowed_list.uniq
  end
end
