// JavaScript for the matching game
// 
var currentTargetIndex = 4;
$(function(){
	// copy an image from the lineup and put it onto the stage

	cloneLineupImageToStage(currentTargetIndex);
	
	// image click event handler
	$("#lineup img").click(function(event){
		if ( currentTargetIndex == $("#lineup img").index(event.target)) {
			// right answer, remove the div containing the image
			$(event.target).slideUp("slow", function(){
				$(this).parent().remove();
			})
		} else {
			// wrong answer, fade the image clicked
			$(event.target).fadeTo("slow", 0.40);
		}
	})
});

// pick image to put on stage
function cloneLineupImageToStage(ix){	
	$("#stage img").replaceWith($("#lineup img").eq(ix).clone());
}