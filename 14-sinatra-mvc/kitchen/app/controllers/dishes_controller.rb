class DishesController < ApplicationController


  get "/dishes/:id" do
    @dish = Dish.find(params[:id])
    erb :"dishes/show"
  end
  
  get "/dishes/new" do
    @dish = Dish.new
    erb :"dishes/new"
  end







  get "/dishes" do
    @dishes = Dish.all.sort_by { |dish| dish.price }
    erb :"dishes/index"
  end
end
