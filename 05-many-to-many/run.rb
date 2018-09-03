require 'pry'

require_relative 'pilot'
require_relative 'passenger'
require_relative 'ticket'

dan = Passenger.new('Dan')
ed = Passenger.new('Ed')
billie = Passenger.new('Billie')
cam = Passenger.new('Cam')
katy = Passenger.new('Katy')

bobby = Pilot.new('Bobby')
ali = Pilot.new('Ali')
jo = Pilot.new('Jo')

ticket1 = Ticket.new(dan, ali)
ticket2 = Ticket.new(katy, jo)
ticket3 = Ticket.new(dan, ali)
ticket4 = Ticket.new(dan, ali)
ticket5 = Ticket.new(cam, jo)
ticket6 = Ticket.new(cam, bobby)

binding.pry
p 'EOF'
