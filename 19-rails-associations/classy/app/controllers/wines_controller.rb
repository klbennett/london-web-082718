class WinesController < ApplicationController
  before_action :set_wine, only: [:show, :update, :destroy, :edit]
  before_action :set_cheeses, only: [:new, :edit]
  before_action :set_regions, only: [:new, :edit]


  def index
    @wines = Wine.all
  end

  def show
  end

  def new
    @wine = Wine.new
  end

  def create
    @wine = Wine.create(wine_params)
    if @wine.valid?
      redirect_to @wine
    else
      flash[:errors] = @wine.errors.full_messages
      redirect_to new_wine_path
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @wine.destroy
    redirect_to wines_path
  end

  private

  def set_wine
    @wine = Wine.find(params[:id])
  end

  def set_regions
    @regions = Region.all.sort_by { |r| r.name }
  end

  def set_cheeses
    @cheeses = Cheese.all.sort_by { |r| r.name }
  end

  def wine_params
    params.require(:wine).permit(:name, :region_id, cheese_ids: [])
  end
end
