$(document).ready(function() {
  // Some click events
  $(document).on('click', '.mobile-menu-btn', function(Event) {
    $("nav ul.menu").toggle();
  });


  function setChatHeight() {
    $('iframe').css('height', $("object").height());
  }

  setChatHeight();

  $(window).on('resize', setChatHeight);
});

