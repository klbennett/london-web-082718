class CreatePizzaTable < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.integer :price
      t.integer :eater_id  # this is a foreign key to the eater table
    end
  end
end
