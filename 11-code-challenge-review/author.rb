class Author
  attr_accessor :name, :genres

  @@all = []

  def initialize(name, genres)
    @name = name
    @genres = genres
    @@all << self
  end

  def self.all
    @@all
  end

  def write_a_book(title, pages)
    Book.new(title, self, pages)
  end

  def self.books_by_author(author)
    Book.all.select do |book|
      book.author == author
    end
  end
end
