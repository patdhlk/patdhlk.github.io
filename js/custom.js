// Your code goes here.
$(document).ready(function(){

//======== LOCAL SCROLL =============//
$('.navigation li').localScroll({ duration: 1000 });
$('.button1').localScroll({ duration: 1000 });

//=========== MOBILE NAV =============//
$('.navigation').mobileMenu({
	defaultText: 'Navigation',
	className: 'select-menu',
	subMenuDash: '&ndash;'
});

//========= SCROLL NAV ==============//
$('.navigation').onePageNav({filter: ':not(.external)'});    

//======== STICKY HEADER =============//
$("#header-wrap").sticky({topSpacing:0});

//============ PARALLAX =============//

$('.inner-wrap').parallax("50%", 0.1);
$('.inner-wrap2').parallax("50%", 0.1);
$('.inner-wrap3').parallax("50%", 0.1);
$('.inner-wrap4').parallax("50%", 0.1);

//=========== LIGHTBOX =============//
$("a[class^='prettyPhoto']").prettyPhoto({theme:'pp_default'});

//======== CAMERA SLIDER ============//
jQuery('#camera_wrap_1').camera({
	height: '58%',
	pagination: false,
	hover: false,
	loader: 'none',
	thumbnails: false
});

//======== TOP CONTENT LAZYLOAD ============//
$(window).load(function() {
	jQuery(".top-inner").show();
});

//=========== ISOTOPE =============//
$(function(){
	var $container = $('#folio');
	$container.isotope({
		itemSelector : '.folio-item'
	});
	var $optionSets = $('#portfolio .folio-filter'),
		$optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected') ) {
			return false;
		}
		var $optionSet = $this.parents('.folio-filter');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
		
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		changeLayoutMode( $this, options );
	} else {
		// otherwise, apply new options
		$container.isotope( options );
	}    
	return false;
	});
});
  
//============= GMAP ===============//

//Google Map Skin - Get more at http://snazzymaps.com/
var myOptions = {
	zoom: 11,
	center: new google.maps.LatLng(49.112261, 9.739280),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true,
	scrollwheel: false,
	styles: [
		{
			"featureType": "water",
			"stylers": [
				{
					"color": "#19a0d8"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"weight": 6
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#e85113"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#efe9e4"
				},
				{
					"lightness": -40
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#efe9e4"
				},
				{
					"lightness": -20
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"lightness": -100
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.icon"
		},
		{
			"featureType": "landscape",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "landscape",
			"stylers": [
				{
					"lightness": 20
				},
				{
					"color": "#efe9e4"
				}
			]
		},
		{
			"featureType": "landscape.man_made",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"lightness": -100
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"hue": "#11ff00"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.icon",
			"stylers": [
				{
					"hue": "#4cff00"
				},
				{
					"saturation": 58
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#f0e4d3"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#efe9e4"
				},
				{
					"lightness": -25
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#efe9e4"
				},
				{
					"lightness": -10
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		}
	]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);

//============= FORM PLACEHOLDER PLUGIN ===============//

$('input, textarea').placeholder();


});