$(document).ready(function(){
  $(".button").click(function() { 
    var clicked = this;
    $clicked = $(clicked);
    var target = $clicked.data("target");
    $("#" + target).slideToggle(400);
  });

  $(".button-only").click(function() { 
    var clicked = this;
    $clicked = $(clicked);
    var target = $clicked.data("target");
    $(".proj-detail").not("#" + target).slideUp();
    $("#" + target).slideToggle(400); 
  });

  var top = $('#upper').height();
  var remaining_height = parseInt($(window).height() - top); 
  $('#lower').height(remaining_height); 

});

