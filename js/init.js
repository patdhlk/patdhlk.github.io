$(function(){

  "use strict";
  
  // Preloader
  $( window ).load(function() {
      $("#loading-img").fadeOut();
      $("#preloader").delay(400).fadeOut("slow");
  });

  $(document).ready(function(){

    // Create launch date for ticker
    // Date below denotes 1st October, 2015
    $(function () {
      var launchDay = new Date(2015, 10, 1);
      $('#ticker').countdown({
        until: launchDay
      });
    });

    // SVG Fallback for older browsers
    $(function() {
      if (!Modernizr.svg) {
        $(".logo img").attr('src', function(index, attr) {
          return attr.replace('svg', 'png');
        });
      }
    });

    // Placeholder initialise
    $('input, textarea').placeholder();

  });

});

