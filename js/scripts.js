$(document).ready(function(){

	$(".atoggle").click(function(){
        $(".about").toggle();
    });

    $(".indrop").click(function(){
        $(".ipics").toggle();
    });

    $(".outdrop").click(function(){
        $(".opics").toggle();
    });

    $(".rdrop").click(function(){
        $(".rpics").toggle();
    });

    $(".gifdrop").click(function(){
        $(".ipics, .opics, .rpics").toggle();
    });





});

