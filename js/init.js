$(document).ready(function(){
  $('.bxslider').bxSlider({
  	controls:false,
  	auto:true,
  });
      $('.chek_it span').on('click', function() {
    $('.calc_window').toggleClass('active');
  });

});
