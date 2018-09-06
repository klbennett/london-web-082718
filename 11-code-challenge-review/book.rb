class Book
  attr_accessor :title, :author, :pages

  @@all = []

  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
    @@all << self
  end

  def self.all
    @@all
  end

  def all_members_that_borrowed
    # should return an array
    members_that_borrowed = []
    Receipt.all.each do |receipt|
      if receipt.book == self
        members_that_borrowed << receipt.member
      end
    end

    members_that_borrowed.uniq
  end

  def get_borrowed(member)
    Receipt.new(member, self)
  end

  def times_rented
    times_rented = 0
    Receipt.all.each do |receipt|
      if receipt.book == self
        times_rented += 1
      end
    end
    times_rented
  end



end
