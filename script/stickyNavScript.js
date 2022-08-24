//mkb
$(document).ready(function () {

    //remove title from .current link
    $(".current").removeAttr('title');

    // stickyNav
    $(window).scroll(function() {
        var y = $(window).scrollTop();

        if (y > 10) {
            $("header").css({
				 "border-top": "none",
                "height": "27",
                "position": "fixed",
                "transition": "all .5s linear"
            });
            $("nav").css({
				"position": "fixed",
                "box-shadow": "0 2px 15px rgb(185, 204, 234)",
                "background": "rgb(29, 27, 0)",

            });


        } else {
            $("header").css({
                "height": "",
                "position": "relative",
                "transition": "all .25s linear"
            });
            $("nav").css({
				"position": "relative",
                "box-shadow": "none",
                "background": "black"
            });

        }
    });
});
function send(){
	var name = document.getElementById("name").value;

	alert("вы прошли регистрацию: "+name);
}


$(document).ready(function(){
  $("#hide").click(function(){
    $("#map").hide(1000);
  });
});


$(document).ready(function(){
  $("#show").click(function(){
    $("#map").show(1000);
  });
});
