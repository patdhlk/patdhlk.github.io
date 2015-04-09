//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

$('article').each(function() {
	var link = $(this).find('h3 a').first();
	link.on('click mousedown', function(event) {
		event.preventDefault();
	});
	$(this).on('click', function(event) {
		if(!$(event.target).hasClass('label')) {
			var url = link.attr('href');
			if(event.which == 2 ) {
				window.open(url, '_blank');
				event.preventDefault();
			} else if(event.which == 1 ) {
				if (event.ctrlKey) {
					window.open(url, '_blank');
				} else {
					window.location.href = url;
				}
				event.preventDefault();
			}
		}
	});
});

//Google Map Skin - Get more at http://snazzymaps.com/
var myOptions = {
	zoom: 11,
	center: new google.maps.LatLng(49.112261, 9.739280),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true,
	scrollwheel: false,
	styles: [{
		"featureType":"all",
		"elementType":"all",
		"stylers":[{
			"saturation":-100
		},
			{
				"gamma":0.5
			}
		]
	}]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);
