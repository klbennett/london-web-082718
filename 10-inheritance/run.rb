require 'pry'
require_relative 'astral_body'

sun = Star.new('Sun')
pluto = Dwarf.new('Pluto', 'no')
b37519C = AstralBody.new('b37519C')
earth = Planet.new('Eath', 'for a couple more ceturies yes')
mars = Planet.new('Mars', 'yes no elon says its ok maybe false nil 1 0 0 0 1 1 1 1 wat yes no horse other')
jupyter = Planet.new('Jupyter', 'no no no no no no no no yes')

binding.pry
p 'EOF'
