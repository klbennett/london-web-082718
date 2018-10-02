# ActiveRecord associations

## How do we make sure to use the functionality that ActiveRecord gives us?

## Three steps to success

1. Model the domain
2. Create models & write the relationships there
3. Create & run the migrations
4. PROFIT

## Domain: PIZZAS

![pizza](https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg "Pizza")


## Relationships (let's draw them out!)

```ruby
# eater
has_many :pizzas
```

```ruby
# pizza toppping
belongs_to :pizza
belongs_to :topping
```

```ruby
# pizza
belongs_to :eater
has_many :pizza_toppings
has_many :toppings, through: :pizza_toppings
```

```ruby
# topping
has_many :pizza_toppings
has_many :pizzas, through: :pizza_toppings
```
## Migrations

```ruby
  def change
    create_table :eaters do |t|
      t.string :name
    end
  end
```

```ruby
  def change
    create_table :pizzas do |t|
      t.string :name
      t.integer :price
      t.integer :eater_id
    end
  end
```

```ruby
  def change
    create_table :toppings do |t|
      t.string :name
    end

    create_table :pizza_toppings do |t|
      t.integer :pizza_id
      t.integer :topping_id
    end
  end
```
