class Passenger

  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def all_tickets
    Ticket.all.select do |ticket|
      ticket.passenger == self
    end
  end

  def pilots
    all_tickets.map {|ticket| ticket.pilot }
  end
end
