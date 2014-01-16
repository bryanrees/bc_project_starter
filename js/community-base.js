$(document).ready(function(){
  
  /* avatar tooltip hover */
  $('.avatar').hover(
    function() {
      var a = $(this);
      setTimeout(function() {
        $(a).find('.tooltip').removeClass('fadeOutUp').addClass('fadeInDown');
      }, 500);
    }, 
    function() {
      $(this).find('.tooltip').removeClass('fadeInDown').addClass('fadeOutUp');
    }
  );
  
  // Show mini-profile on hover

  $('.avatar').click(function(){
    $(this).find('.mini-profile').addClass('active');
  });

  $('.follow-btn').hover(function(){
    if ($(this).hasClass('not-following')) {
      $(this).css('background-color', '#99cc33');
      $(this).parent('.mini-profile').addClass('follow-hover');
    };
  }, function() {
    if ($(this).hasClass('not-following')) {
      $(this).css('background-color', '#222');
      $(this).parent('.mini-profile').removeClass('follow-hover');
    };
  });

  // Change follow button states when clicked

  $('.follow-btn').click(function() {
    if ($(this).hasClass('not-following')) {
      $('.follow-btn').css({
        'background-color': '#99cc33',
        'background-image': "url('img/ico-24-check-black.png')",
        'color': '#222'
      }).removeClass('not-following').addClass('following').html('Following');
      $(this).parent('.mini-profile').siblings('.follow').css({
        'background-color': '#99cc33',
        'background-image': "url('img/ico-12-check-black.png')"
      });
    } else if ($(this).hasClass('following')) {
      $('.follow-btn').css({
        'background-color': '#222',
        'background-image': "url('img/ico-24-plus-white.png')",
        'color': '#fff'
      }).removeClass('following').addClass('not-following').html('Follow');
      $(this).parent('.mini-profile').removeClass('follow-hover');
      $(this).parent('.mini-profile').siblings('.follow').css({
        'background-color': '#222',
        'background-image': "url('img/ico-12-plus-white.png')"
      });
    };

    if ($('.feature-tip').hasClass('clicked')) {
      return true
    } else {
      setTimeout(function() {
        $('.feature-tip').addClass('clicked');
      }, 250);
    };

  });
  
  $('.follow.following').parent().addClass('following');

  // Switch tabs within profile on hover of icons

  $('.tab').hover(function(){
    if ($(this).hasClass('active')) {
      return true
    } else {
      $('.tab.active').removeClass('active').css('z-index', 1);
      $(this).addClass('active').css('z-index', 3);
    };
  });

  // Full Profile Hover

  $('.full-profile').hover(
    function() {
        $('.tooltip').show().removeClass('fadeOutUp').addClass('fadeInDown');
    }, 
    function() {
      $('.tooltip').removeClass('fadeInDown').addClass('fadeOutUp').hide();
    }
  );
  
  /* post-menu */
  $('.post .post-menu .btn').click(function(){
    $(this).siblings('ul.options').toggle();
    $('html').addClass('options-active');
  });
  
  /* Share Widget */
  $('#main .share li.social').click(function(){
    $('#share').show();
  });
  
  $('#share .share-wrapper .close').click(function(){
    $('#share').hide();
  });
  
  var stickyElement = function () {
      // element to be sticky
      var $stickyEl = $(".share");
      // element that will stop the sticky element
      var $stopEl = $('#comments');
      var $containerEl = $('#main');
      var halfWindowHeight = $(window).height()/2;
      var shareOffset = halfWindowHeight - ($('.share').height()/2) - 170;

      $stickyEl.waypoint('sticky', {
          wrapper: '<div class="sticky-wrapper" />',
          stuckClass: 'stuck',
          offset: shareOffset
      });

      $stopEl.waypoint(function (direction) {
          if (direction == 'down') {
              // when scrolling down
              // replace pos:fixed with absolute and set top value to
              // the distance from $stopEl to viewport top minus the 
              // height of the stickyElement 
              var containerOffset = $containerEl.offset();
              var footerOffset = $stopEl.offset();
              $stickyEl.css({
                  position: 'absolute',
                  top: footerOffset.top - containerOffset.top - $stickyEl.outerHeight()
              });
          } else if (direction == 'up') {
              // remove the inline styles so sticky styles apply again
              $stickyEl.attr('style', '');
          }

      }, {
          // trigger the waypoint when the bottom of stickyEl touches top of stopEl
          offset: function () {
              return $stickyEl.outerHeight() + shareOffset + 170 + 77;
          }
      });
  };

  stickyElement();
  
  /* dot dot dot for posts */
  $(".post .post-content .description").dotdotdot();
  
});