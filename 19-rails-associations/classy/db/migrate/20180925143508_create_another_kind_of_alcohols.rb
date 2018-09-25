class CreateAnotherKindOfAlcohols < ActiveRecord::Migration[5.1]
  def change
    create_table :another_kind_of_alcohols do |t|
      t.string :name

      t.timestamps
    end
  end
end
