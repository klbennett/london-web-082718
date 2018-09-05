class AddColumnsToStudents < ActiveRecord::Migration[5.2]
  def change
  	add_column :students, :favorite_color, :string
  	add_column :students, :height, :integer
  	add_column :students, :grade, :integer
  end
end
