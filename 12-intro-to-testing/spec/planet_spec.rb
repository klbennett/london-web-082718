require_relative '../app/models/planet'

describe 'Planet' do
  earth = Planet.new('Earth', 'Currently not destroyed.')

  it 'exists' do
    expect(earth.is_a?(Planet)).to eq(true)
  end
end
