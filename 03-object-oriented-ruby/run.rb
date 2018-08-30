require 'pry'
require_relative 'car'

my_car = Car.new(4, 5)
billies_car = Car.new(3, 2)

binding.pry
puts 'end'
