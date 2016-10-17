window.onload = function() {
	$(document).ready(function() {

		$('.proj').parallax({
	      invertX: false,
	      invertY: false,
	      scalarX:15,
	      scalarY:15,
	      originX:.5,
	      originY:.5,
	      calibrateX:true,
	      calibrateY:true,
	    });
    
    //HOVER           

    var mobile = function(){

        $('.f1 p').hover(function(){
            $('.h1').toggle();
        });

        $('.f2 p').hover(function(){
            $('.h2').toggle();
        });

        $('.f3 p').hover(function(){
            $('.h3').toggle();
        });

        $('.f4 p').hover(function(){
            $('.h4').toggle();
        });

        $('.f5 p').hover(function(){
            $('.h5').toggle();
        });

        $('.f6 p').hover(function(){
            $('.h6').toggle();
        });

        $('.f7 p').hover(function(){
            $('.h7').toggle();
        });

        $('.f8 p').hover(function(){
            $('.h8').toggle();
        });

        $('.f9 p').hover(function(){
            $('.h9').toggle();
        });

        $('.f10 p').hover(function(){
            $('.h10').toggle();
        });

        $('.f11 p').hover(function(){
            $('.h11').toggle();
        });

        $('.f12 p').hover(function(){
            $('.h12').toggle();
        });
    };

    var windowSize = $(window).width();
    if(windowSize > 1025){
        mobile();
    };


// mobile work previews

        
        $('.p1').click(function(){
            $('.h1').toggle();
        });

    	$('.p2').click(function(){
      		$('.h2').toggle();
    	});

    	$('.p3').click(function(){
      		$('.h3').toggle();
    	});

    	$('.p4').click(function(){
      		$('.h4').toggle();
    	});

    	$('.p5').click(function(){
      		$('.h5').toggle();
    	});

    	$('.p6').click(function(){
      		$('.h6').toggle();
    	});

    	$('.p7').click(function(){
      		$('.h7').toggle();
    	});

    	$('.p8').click(function(){
      		$('.h8').toggle();
    	});

    	$('.p9').click(function(){
      		$('.h9').toggle();
    	});

    	$('.p10 p').click(function(){
      		$('.h10').toggle();
    	});

        $('.p11 p').click(function(){
            $('.h11').toggle();
        });

        $('.p12 p').click(function(){
            $('.h12').toggle();
        });

    // thesis dogshit
    	$(".statement").click(function(){
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
	});


}
