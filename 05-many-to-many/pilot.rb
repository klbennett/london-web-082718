class Pilot

  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def all_tickets
    Ticket.all.select do |ticket|
      ticket.pilot == self
    end
  end

  def passengers
    all_tickets.map {|ticket| ticket.passenger }
  end

  def has_flown_with(passenger)
    passengers.include? passenger
  end

  def has_flown_with_by_name(name)
    !!passengers.find {|passenger| passenger.name == name}
  end
end
