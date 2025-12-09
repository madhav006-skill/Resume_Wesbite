// js/script.js
$(function(){
  // fill current year
  $('#year, #year2').text(new Date().getFullYear());
  // fill today's date on biodata
  $('#today').text(new Date().toLocaleDateString());

  // simple nav active handling
  $('.main-nav a').on('click', function(){
    $('.main-nav a').removeClass('active');
    $(this).addClass('active');
  });

  // print buttons
  $('#printBtn, #printBtn2').on('click', function(e){
    e.preventDefault();
    window.print();
  });

  // small focus-visible accessibility helper
  $('a, button').on('keydown', function(e){
    if(e.key === 'Tab') $(this).addClass('keyboard-focus');
  }).on('blur', function(){ $(this).removeClass('keyboard-focus'); });
});
