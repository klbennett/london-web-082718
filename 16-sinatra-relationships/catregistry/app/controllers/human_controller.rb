class HumanController < ApplicationController
  get "/humans/new" do
    @cats = Cat.all
    erb :"humans/new"
  end

  post "/humans" do
    binding.pry
    human = Human.create(params[:human])
  end
end
