class PizzaToppingAdder
  def self.add_all_toppings(pizza_id, topping_ids)
    topping_ids.each do |id|
      puts id, topping_ids
      PizzaTopping.create(pizza_id: pizza_id, topping_id: id)
    end
  end
end
