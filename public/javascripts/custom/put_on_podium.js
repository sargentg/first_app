// pick image to put on podium
function cloneLineupImageToPodium(ix){
	// brighten image, then clone
    //  alert("Dumb Alert");
	//$("#console").append("<br/>[cloneLineupImage] " + ix);
	$("#podium img").       replaceWith($(".lineup img.mugshot").eq(ix).css("opacity", 1).clone());
	$("#podium figcaption").remove();
	$("#podium figure").append($(".lineup figcaption" ).eq(ix).clone());
}


