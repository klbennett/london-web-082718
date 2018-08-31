require 'pry'

require_relative 'tweet'
require_relative 'user'

ed = User.new('Ed')
dan = User.new('Dan')

ed.post_tweet('Siiiick lecture')
ed.post_tweet('Actually, nah')

dan.post_tweet('I know, man')
dan.post_tweet('SIIIICK')

kay = User.new('Kay')

kay.post_tweet('Follow me please')
kay.post_tweet('I will tweet some smarter stuff that these two!')

ed.post_tweet('SURE')

## SSoT Single Source of Truth

binding.pry
p 'endOfFile'
