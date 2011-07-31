module GamesHelper
  def suspect_caption(suspect)
    # returns the caption phrase if the @captions parameter is turned on
    # display only if it is "true"
    yes = params.has_key?(:captions) && params[:captions] == "true"
    yes ? raw("<figcaption>" + suspect.caption + "</figcaption>"): ""
  end
end
