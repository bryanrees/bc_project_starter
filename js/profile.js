$(window).scroll(function() {
  var scrollTop = $(document).scrollTop();

  if ( scrollTop <= 280 ) {
    $('.header').removeClass('scrolled');
  } else if ( scrollTop >= 281 ) {
    $('.header').addClass('scrolled');
  };
});

$(document).ready(function(){
  // scroll page on start
  $('body').animate({scrollTop: 280}, 1000);
  
  // initialize scroll animation
  
  // initialize profile pic prompt
  setTimeout(function() {
    $('.profile-pic-prompt').addClass('active');
    $('.empty .profile-body').animate({'padding-top': '60px'}, 500);
  }, 1500);
  
  $('.profile-pic-prompt .close').click(function(){
    $('.profile-pic-prompt').removeClass('active');
    $('.empty .profile-body').animate({'padding-top': '0'}, 500);
  });
  
  // activate Chosen plugin for dropdowns
  var config = {
    '.chosen-select'           : {},
    '.chosen-select-deselect'  : {allow_single_deselect:true},
    '.chosen-select-no-single' : {disable_search_threshold:10},
    '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
    '.chosen-select-width'     : {width:"100%"}
  };
  for (var selector in config) {
    $(selector).chosen(config[selector]);
  };
      
});