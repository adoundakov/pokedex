class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(poke_params)
    moves = poke_params[:moves].split(',')
    items = Array.new(3) {Item.all.sample}
    @pokemon.items = items
    @pokemon.moves = moves
    @pokemon.save
    render :show
  end

  private

  def poke_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
