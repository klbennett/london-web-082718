require_relative 'player'
require_relative 'team'

require 'pry'

manchester_united = Team.new('MANUFC')
pogba = Player.new('Paul Pogba', manchester_united, 5)
zinedine_zidane = Player.new('Zizou', manchester_united, 5)
roberto_carlos = Player.new('R Carlos', manchester_united, 5)

liverpool = Team.new("LFC")
deepak = Player.new('Deepak C', liverpool, 5)

binding.pry
p 'EOF'


0x007fd1dfcc0958
0x007fd1dfcc0958
