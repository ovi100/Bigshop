/*------------------------------------
 *Author:MD ABU SAYED
 *Template:Blog Theme 3
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function(){

	// $(window).scroll(function(){
	//     if ($(this).scrollTop()>150){
	//       $('.menu').addClass('fixed-menu');
	      
	//     } 
	//     else {
	//       $('.menu').removeClass('fixed-menu');
	//     }
 //  	});

  	// if ($(window).width()<768){
   //    $('.col-logo').addClass('order-12');
   //    $('.col-icon').addClass('order-1');
      
   //  } 
   //  else {
   //    $('.col-logo').removeClass('order-12');
   //    $('.col-icon').removeClass('order-1');
   //  }


   // Start Home Slider Js

    $('#main-slider').owlCarousel({
    	// autoplay:true,
    	autoplayHoverPause:true,
    	dots:true,
    	items:1,
    	loop:true,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        768:{
	            items:1
	        }
	    },
	    slideBy:1,
	    smartSpeed:1800
	})

    // End Home Slider Js

    // Search Click Event

    // Search Click Event

});


