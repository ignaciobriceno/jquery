class ColorsController < ApplicationController
  def create
  	@color = params[:color].inspect
  	
  end
end
