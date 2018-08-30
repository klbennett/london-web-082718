# what are objects - instances vs classes

# instance @variables
class Car
  attr_accessor :wheels, :doors

  @@all_cars = []

  def initialize(no_of_wheels, no_of_doors)
    @wheels = no_of_wheels
    @doors = no_of_doors
    @@all_cars << self
  end

  def decrease_the_num_of_doors(num_of_doors_out)
    # @doors = @doors - num_of_doors_out
    if num_of_doors_out > @doors
      puts "Ain't gonna happen, mate"
    else
      @doors -= num_of_doors_out
      puts "#{num_of_doors_out} GONE!"
    end
  end

  # self.<method_name> is a CLASS method.
  def self.all_cars
    @@all_cars
  end

  def self.find_a_car_by_number_of_doors(number_of_doors)
    cars_found = []
    @@all_cars.each do |car|
      if car.doors == number_of_doors
        cars_found << car
      end
    end
    cars_found
  end
end
