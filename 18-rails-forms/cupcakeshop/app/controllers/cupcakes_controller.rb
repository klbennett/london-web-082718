class CupcakesController < ApplicationController

  def index
    @cupcakes = Cupcake.all
  end

  def show
    @cupcake = Cupcake.find(params[:id])
  end

  def new
    @cupcake = Cupcake.new
  end

  def create
    @cupcake = Cupcake.create(# WHAT DO WE PUT HERE?)
    redirect_to @cupcake
  end

  def edit
    @cupcake = Cupcake.find(params[:id])
  end

  def update
    @cupcake = Cupcake.find(params[:id])
    @cupcake.update(# WHAT DO WE PUT HERE?)
    redirect_to @cupcake
  end

  def destroy
    @cupcake = Cupcake.find(params[:id])
    @cupcake.destroy
    redirect_to cupcakes_path
  end
end
