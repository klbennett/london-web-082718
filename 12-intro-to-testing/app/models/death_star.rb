class DeathStar
  attr_reader :serial_no, :energy_lvl

  def raise_energy_too_low_exception
    raise 'nice try, energy too low'
  end

  def initialize(serial_no, energy_lvl)
    @serial_no = serial_no
    @energy_lvl = energy_lvl
  end

  def destroy_planet(planet)
    # fire a big-ass laser (Bobby's suggestion, *VERBATIM*)
    if @energy_lvl >= 95
      @energy_lvl -= 90
      planet.status = 'SHATTERED'
    else
      raise_energy_too_low_exception
    end
    @energy_lvl
  end

  def regenerate
    @energy_lvl += 50
  end
end
