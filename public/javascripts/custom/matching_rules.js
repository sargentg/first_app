
// initialize client-side javascript array to server-side ruby array
// This javascript is here because I need the active <% %> tags. When we switch
// to the Rails 3.1 Assets Pipeline, should be able to move this to a pure javascript file.

// var xxglobal_seq = [<%= @ruby_array.join(", ") %>];

// create empty array to remember which images are faded and need to be restored
var faded_arr = [ ];

$(function(){

	// remove this index from the global_seq array
	// copy an image from the lineup and put it onto the podium
	cloneLineupImageToPodium(global_seq[0]);


 	// div (containing the image) click event handler
	$(".lineup").click(function(event){
			suspectFig = $(event.target);
			if (event.target.className == "lineup") return 0;
			if ($(event.target)[0].className != "suspect") {
				suspectFig = $(event.target).parent(".suspect")[0];
			}
		if ( global_seq[0] == $(".lineup figure").index(suspectFig)) {
			// right answer, animate a bunch of effects
			// ending with the next item to match on the podium
			animateRightAnswer(suspectFig, this);

		} else {
			// wrong answer, fade the chosen suspect's image
			$("img.mugshot", suspectFig).fadeTo("slow", 0.50);
			// remember each faded target
			faded_arr = faded_arr.concat(suspectFig);
			// clone the red X and put it on the suspect, and make it visible
			$("#storehouse img.false").clone().appendTo(suspectFig);

		}
	});

	// set the height of the podium to keep it from collapsing after the last image is removed
	var h = $("#podium").css("height");
	$("#podium").css("height", h);
});
