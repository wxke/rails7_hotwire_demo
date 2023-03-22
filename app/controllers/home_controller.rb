class HomeController < ApplicationController
  def index; end

  def new; end

  def messages; end

  def stream
    respond_to do |format|
      format.turbo_stream { render :stream }
      format.html { redirect_back(fallback_location: collection_path) }
    end
  end
end
