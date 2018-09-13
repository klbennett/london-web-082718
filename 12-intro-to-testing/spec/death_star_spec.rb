require_relative '../app/models/death_star'
require_relative '../app/models/planet'

describe 'Death Star' do

  death_star = DeathStar.new(315713, 100)

  it 'exists' do
    expect(death_star.is_a?(DeathStar)).to eq(true)
  end

  it 'has a serial number' do
    expect(death_star.serial_no).to eq(315713)
  end

  it 'can destroy planets' do
    pluto = Planet.new('Pluto', 'Alive and kickin\'')
    death_star.destroy_planet(pluto)

    expect(pluto.status).to eq('SHATTERED')
  end

  it 'can\'t destroy planets twice in a row, without regaining energy' do
    hoth = Planet.new('hoth', 'Alive and kickin\'')
    expect { death_star.destroy_planet(hoth) }.to raise_error
  end

  it 'can regain energy' do
    death_star_2 = DeathStar.new(31571353, 100)
    tattoooine = Planet.new('Tattoooine', 'Alive and kickin\'')
    death_star_2.destroy_planet(tattoooine)
    current_energy = death_star_2.energy_lvl
    death_star_2.regenerate
    expect(death_star_2.energy_lvl).to eq(current_energy + 50)
  end
end
