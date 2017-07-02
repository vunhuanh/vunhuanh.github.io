$(document).ready(function(){
  /*
  $('#main li ul').hide();
    $('#main li').click(function() {
        $(this).children('ul').slideToggle("slow");
        $(this).toggleClass('open');
  });*/

  $(".button").click(function() { 
    var clicked = this;
    $clicked = $(clicked);
    var target = $clicked.data("target");
    $("#" + target).slideToggle(500);

    $(".rotate").toggle();
  });
});

