$(document).ready(function () {

  $('.show-side-nav, .close-nav').on('click', function(e) {
    e.preventDefault();
    setupNav();
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

  $('#footer-container').load('footer.html');
  $('#navigation').load('navigation.html', { active_link: 'Hello World' }, function() {
    $('.close-nav').on('click', function(e) {
      e.preventDefault();
      setupNav();
    });
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
  $('.topnav').toggleClass('open');
  $('nav').toggleClass('open');
  $('body').toggleClass('nav-open');
}