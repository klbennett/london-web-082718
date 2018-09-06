require 'pry'
require_relative 'author'
require_relative 'book'
require_relative 'member'
require_relative 'receipt'

stephen_king = Author.new('Stephen King', ['Fiction', 'Horror'])
misery = Book.new('Misery', stephen_king, 240)
the_shining = Book.new('The Shining', stephen_king, 2340)
cujo = Book.new('Cujo', stephen_king, 240)

jk_rowling = Author.new('J.K. Rowling', ['Magic', 'Magic hell yea'])
harry_first = Book.new('...and the Philosophers Stone', jk_rowling, 290)
harry_second = Book.new('...and the Chamber of Secrets', jk_rowling, 340)

cam = Member.new('Cam', 27)
ed = Member.new('Ed', 30)
Receipt.new(cam, misery)
Receipt.new(ed, misery)
Receipt.new(cam, misery)
Receipt.new(cam, harry_first)
Receipt.new(cam, harry_second)
Receipt.new(cam, harry_first)
Receipt.new(cam, harry_first)
Receipt.new(cam, harry_first)
Receipt.new(cam, harry_first)
Receipt.new(cam, harry_first)
Receipt.new(cam, harry_first)
Receipt.new(cam, harry_first)
Receipt.new(cam, misery)
Receipt.new(cam, the_shining)
Receipt.new(cam, the_shining)
Receipt.new(cam, the_shining)
Receipt.new(cam, misery)
Receipt.new(cam, cujo)
Receipt.new(cam, cujo)
Receipt.new(cam, cujo)


binding.pry
p 'EOF'
