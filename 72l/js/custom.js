$(document).ready(function () {

  $('.show-side-nav, .close-nav').on('click', function(e) {
    e.preventDefault();
    $('.topnav').toggleClass('open');
    $('nav').toggleClass('open');
    $('body').toggleClass('nav-open');
  });

});