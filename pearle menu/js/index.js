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
	    });	
	  }
	});

// dropdown mandje
$('a.mandje').on('click', function(e) {
	e.preventDefault();
});


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