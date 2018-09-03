class Ticket

  attr_reader :passenger, :pilot

  @@all = []

  def initialize(passenger, pilot)
    @passenger = passenger
    @pilot = pilot
    @@all << self
  end

  def self.all
    @@all
  end

  def self.tickets_for_pilot_by_name(name)
    self.all.select do |ticket|
      ticket.pilot.name == name
    end
  end

  def self.tickets_for_passenger_by_name(name)
    self.all.select do |ticket|
      ticket.passenger.name == name
    end
  end
end
