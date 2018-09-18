class DogController < ApplicationController

  get "/dogs" do
    @dogs = Dog.all
    erb :"dogs/index"
  end

  get "/dogs/new" do
    erb :"dogs/new"
  end

  get "/dogs/:id" do
    @dog = Dog.find(params[:id])
    erb :"dogs/show"
  end

  post "/dogs" do
    dog = Dog.create({name: params[:name], age: params[:age]})
    redirect "/dogs/#{dog.id}"
  end

  get "/dogs/:id/edit" do
    @dog = Dog.find(params[:id])
    erb :"dogs/edit"
  end

  patch "/dogs/:id" do
    dog = Dog.find(params[:id])
    dog.update({name: params[:name], age: params[:age]})
    redirect "/dogs/#{dog.id}"
  end

  delete "/dogs/:id" do
    dog = Dog.find(params[:id])
    dog.destroy
    redirect "/dogs"
  end


end
