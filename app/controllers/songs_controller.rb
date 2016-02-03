class SongsController < ApplicationController

  def create
    @song = Song.find(params[:id])
    @song.fingerprints.create(print: params[:frequencies])
  end

end
