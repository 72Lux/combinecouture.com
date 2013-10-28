$(document).ready(function () {

  $('.show-side-nav, .close-nav').on('click', function(e) {
    e.preventDefault();
    setupNav();
  });

  $('.stretch-image').anystretch();

  $('.popover-lux-trigger').popover();
  $('#slides').superslides({'inherit_height_from' : '.slides-container-outer'});

  $('body').removeAttr('style');
  $('.scroll-link').on('click', function(e) {
    e.preventDefault();
    scrollToAnchor($(this).attr('href'));
  });

  $('.show-more').on('click', function(e) {
    e.preventDefault();
    showMore();
  });

  $('#footer-container').load('footer.html');

  $('#navigation').load('navigation.html', { active_link: 'Hello World' }, function() {
    $('.close-nav').on('click', function(e) {
      e.preventDefault();
      setupNav();
    });
  });

  $('.prevent-default').on('click', function(e) {
    e.preventDefault();
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

function setupNav() {
  $('nav.sidenav').toggleClass('open', 500, "swing");
  $('body').toggleClass('nav-open', 500, "swing");
}