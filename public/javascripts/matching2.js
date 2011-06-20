var windowWidth = $(window).width();
var windowHeight = $(window).height();
var AudioPlayer;


$ (function() {
	alert("Hello world");
    $('img').each(function() {
        if (windowWidth > windowHeight) {
            $(this).css("width", $(window).height() / 6);   // Set new width
            $(this).css("height",$(window).height() / 6);  // This will look ugly
        } else {
            $(this).css("width", $(window).width() / 6);   // Set new width
            $(this).css("height",$(window).width() / 6);  // This will look ugly
        }
    });

    jQuery("#startPic").css("visibility", "visible");
    jQuery("#picStart").css("width", $(window).width());
    jQuery("#picStart").css("height",$(window).height());

    jQuery("#picDiv000").css("top", (windowHeight * 1/14));
    jQuery("#picDiv000").css("left", (windowWidth  * 5/12));
   
    jQuery("#picDiv001").css("top", (windowHeight * 4/14));
    jQuery("#picDiv001").css("left", (windowWidth * 1/12));

    jQuery("#picDiv002").css("top", (windowHeight * 4/14));
    jQuery("#picDiv002").css("left", (windowWidth  * 5/12));

    jQuery("#picDiv003").css("top", (windowHeight * 4/14));
    jQuery("#picDiv003").css("left", (windowWidth  * 9/12));

    jQuery("#picDiv004").css("top", (windowHeight * 7/14));
    jQuery("#picDiv004").css("left", (windowWidth * 1/12));

    jQuery("#picDiv005").css("top", (windowHeight * 7/14));
    jQuery("#picDiv005").css("left", (windowWidth  * 5/12));

    jQuery("#picDiv006").css("top", (windowHeight * 7/14));
    jQuery("#picDiv006").css("left", (windowWidth  * 9/12));

    jQuery("#picDiv007").css("top", (windowHeight * 10/14));
    jQuery("#picDiv007").css("left", (windowWidth * 1/12));
   
    jQuery("#picDiv008").css("top", (windowHeight * 10/14));
    jQuery("#picDiv008").css("left", (windowWidth  * 5/12));

    jQuery("#picDiv009").css("top", (windowHeight * 10/14));
    jQuery("#picDiv009").css("left", (windowWidth  * 9/12));

    jQuery("#mainTask").css("visibility", "hidden");

    jQuery("#audio000").css("visibility", "visible");
    AudioPlayer = document.getElementById("audioPlayer");

    jQuery("#startButton").click();
//  jQuery("#picDiv002").css("top", 100);
//  jQuery("#picDiv002").css("left", 300);
//  jQuery("#picDiv002").css("visibility", "visible");
});



$(function() {
    $("#startPic").click(function() {
        jQuery("#startPic").css("visibility", "hidden");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv000").css("visibility", "visible");
        jQuery("#picDiv001").css("visibility", "visible");
        jQuery("#picDiv002").css("visibility", "visible");
        jQuery("#picDiv003").css("visibility", "visible");
        jQuery("#picDiv004").css("visibility", "visible");
        jQuery("#picDiv005").css("visibility", "visible");
        jQuery("#picDiv006").css("visibility", "visible");
        jQuery("#picDiv007").css("visibility", "visible");
        jQuery("#picDiv008").css("visibility", "visible");
        jQuery("#picDiv009").css("visibility", "visible");

    });
});

$(function() {
    $("#picDiv001").click(function() {
        $("#audioPlayer").attr("src","wrong0002.wav");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv001").css("opacity", 0.2);
    });
});

$(function() {
    $("#picDiv002").click(function() {
        $("#audioPlayer").attr("src","wrong0002.wav");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv002").css("opacity", 0.2);
    });
});

$(function() {
    $("#picDiv003").click(function() {
        $("#audioPlayer").attr("src","wrong0002.wav");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv003").css("opacity", 0.2);
    });
});

$(function() {
    $("#picDiv004").click(function() {
        $("#audioPlayer").attr("src","wrong0002.wav");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv004").css("opacity", 0.2);
    });
});

$(function() {
    $("#picDiv005").click(function() {
        $("#audioPlayer").attr("src","wrong0002.wav");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv005").css("opacity", 0.2);
    });
});

$(function() {
    $("#picDiv006").click(function() {
        $("#audioPlayer").attr("src","wrong0002.wav");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv006").css("opacity", 0.2);
    });
});

$(function() {
    $("#picDiv007").click(function() {
        $("#audioPlayer").attr("src","Right0002.wav");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv007").css("opacity", 0.2);
    });
});

$(function() {
    $("#picDiv008").click(function() {
        $("#audioPlayer").attr("src","wrong0002.wav");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv008").css("opacity", 0.2);
    });
});

$(function() {
    $("#picDiv009").click(function() {
        $("#audioPlayer").attr("src","wrong0002.wav");
        AudioPlayer.play();
        recordData();
        jQuery("#picDiv009").css("opacity", 0.2);
    });
});



function recordData(){
// alert("this is an alert");
};