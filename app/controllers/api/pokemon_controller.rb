class Api::PokemonController < ApplicationController
  def index
    sleep 2 # simulate latency
    @pokemon = Pokemon.all
    render :index
  end

  def show
    sleep 2 # simulate latency
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(poke_params)
    moves = poke_params[:moves].split(',') unless moves.nil?
    items = Array.new(3) {Item.all.sample}
    @pokemon.items = items
    @pokemon.moves = moves
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private

  def poke_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
