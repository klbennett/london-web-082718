class ToyController < ApplicationController
  get "/toys" do
    @toys = Toy.all
    erb :"toys/index"
  end

  get "/toys/new" do
    @cats = Cat.all
    erb :"toys/new"
  end

  get "/toys/:id" do
    @toy = Toy.find(params[:id])
    erb :"toys/show"
  end

  post "/toys" do
    binding.pry
    toy = Toy.create(params[:toy])
    # redirect to "/toys/#{toy.id}"
  end

  get "/toys/:id/edit" do
    @toy = Toy.find(params[:id])
    erb :"toys/edit"
  end

  patch "/toys/:id" do
    toy = Toy.find(params[:id])
    toy.update(params[:toy])
    redirect "/toys/#{toy.id}"
  end

  delete "/toys/:id" do
    toy = Toy.find(params[:id])
    toy.destroy
    redirect "/toys"
  end
end
