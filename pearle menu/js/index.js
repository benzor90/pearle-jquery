$(document).ready( function() {

// sticky-header
$(window).scroll(function(){
	  if( $(window).scrollTop() >= 140 ) {
	  	$('.sticky-header').fadeIn(300, function() {
	    	$('.sticky-header').addClass('visible');
	    	// dropdownmandje
	   		$('.winkelmandje-dropdown').stop(true,true).delay(0).fadeOut(300);
 			
	    });	
	  } else {
	  	$('.sticky-header').fadeOut(100, function() {
	    	$('.sticky-header').removeClass('visible');

	    	// dropdownmandje
	    	// $('.winkelmandje-dropdown-sticky').stop(true,true).fadeOut(300);
	    	// fade2 = 0;

	    });	
	  }
	});

// dropdown mandje
$('a.mandje').on('click', function(e) {
	e.preventDefault();
});

// var fade = 0;
//  $('.mandje1, .winkelmandje-dropdown').hover( function() {
 	
//  	if (fade === 0 ) {
//  		$('.winkelmandje-dropdown').fadeIn(300, function() {
// 	 		$('.winkelmandje-dropdown').addClass('visible');
// 	 		fade = 1;
//  		});
//  	} else {
//  		$('.winkelmandje-dropdown').fadeOut(100, function() {
//  			$('.winkelmandje-dropdown').removeClass('visible');
//  		fade = 0;
//  	});
//  	}
 	
//  });

 // var fade2 = 0;
 // $('.mandje2, .winkelmandje-dropdown-sticky').hover( function() {
 	
 // 	if (fade2 === 0 ) {
 // 		$('.winkelmandje-dropdown-sticky').stop(true,true).fadeIn(300);
 // 		fade2 = 1;
 // 	} else {
 // 		$('.winkelmandje-dropdown-sticky').stop(true,true).delay(0).fadeOut(300);
 // 		fade2 = 0;
 // 	}
 	
 // });

// dropdown links
var fade = 0;
$('.mandje, .winkelmandje-dropdown').hover( function() {

if (fade === 0)	{
	$('.winkelmandje-dropdown').stop(true,true).fadeIn('fast');
	fade = 1;
} else {
	$('.winkelmandje-dropdown').stop(true,true).delay(100).fadeOut();
	fade = 0;
}	
});


// dropdown links
var show = 0;
$('#brillen, .dropdown-links').hover( function() {

if (show === 0)	{
	$('.dropdown-links').stop(true,true).fadeIn();
	show = 1;
} else {
	$('.dropdown-links').stop(true,true).delay(0).fadeOut();
	show = 0;
}	
});




});