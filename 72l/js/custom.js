$(document).ready(function () {

  $('.show-side-nav, .close-nav').on('click', function(e) {
    e.preventDefault();
    setupNav();
  });

  $('.stretch-image').anystretch();

  $('.popover-lux-trigger').popover();

  if ($('#slides').length > 0) {
    $('#slides').superslides({'inherit_height_from' : '.slides-container-outer', 'inherit_width_from' : '.container', 'animation' : 'fade', 'pagination': false});
  }

  if ($('#slides-modal-lll').length > 0) {
    $('#slides-modal-lll').superslides({'inherit_height_from' : '.modal-slideshow .modal-content', 'pagination': false});
  }

  if ($('#slides-modal-wsj').length > 0) {
    $('#slides-modal-wsj').superslides({'inherit_height_from' : '.modal-slideshow .modal-content', 'pagination': false});
  }

  if ($('#slides-modal-tv').length > 0) {
    $('#slides-modal-tv').superslides({'inherit_height_from' : '.modal-slideshow .modal-content', 'pagination': false});
  }

  $('body').removeAttr('style');

  $('.scroll-link').on('click', function(e) {
    e.preventDefault();
    scrollToAnchor($(this).attr('href'));
  });

  $('.show-more').on('click', function(e) {
    e.preventDefault();
    showMore();
  });

  $('#footer-container').load('footer.html', function() {
    $('.stretch-image').anystretch();
  });

  $('#navigation').load('navigation.html', { active_link: 'Hello World' }, function() {
    $('.close-nav').on('click', function(e) {
      e.preventDefault();
      setupNav();
    });
  });

  $('.prevent-default').on('click', function(e) {
    e.preventDefault();
  });

  $('.hover-replace-image').hover(
    function() {
      var orig = $(this).attr('src');
      var image = $(this).data('hover');
      $(this).removeClass('masked').data('orig', orig).attr('src',image);
    }, function() {
      var orig = $(this).data('orig');
      $(this).attr('src', orig).addClass('masked');
    }
  );

  $('#next-main-slide').on('click', function(e) {
    e.preventDefault();
    $('#prev-main-slide').fadeIn();
    var next_index = $('#slides').superslides('next');
    if(next_index == 2) {
      $(this).hide();
    }
    $('#slides').superslides('animate', next_index);
  });

  $('#prev-main-slide').on('click', function(e) {
    e.preventDefault();
    $('#next-main-slide').fadeIn();
    var prev_slide = $('#slides').superslides('prev');
    if(prev_slide == 0) {
      $(this).hide();
    }
    $('#slides').superslides('animate', prev_slide);
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
  $('nav.sidenav').toggleClass('open', 300, "swing");
  // $('body').toggleClass('nav-open', 300, "swing");
  // $('#page-nav').toggleClass('nav-open', 300, "swing");
}