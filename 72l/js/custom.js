$(document).ready(function () {

  $('.show-side-nav, .close-nav').on('click', function(e) {
    e.preventDefault();
    $('.topnav').toggleClass('open');
    $('nav').toggleClass('open');
    $('body').toggleClass('nav-open');
  });

  $('#pub-header-image').anystretch();

  $('.scroll-link').on('click', function(e) {
    e.preventDefault();
    scrollToAnchor($(this).attr('href'));
  });

  $('.show-more').on('click', function(e) {
    e.preventDefault();
    showMore();
  });

});

function showMore() {
  $('html,body').animate({
    scrollTop: $(window).scrollTop() + 300
  });
}

function scrollToAnchor(aid){
  var aTag = $(aid);
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}