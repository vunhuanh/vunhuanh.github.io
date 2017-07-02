$(document).ready(function(){
  $(".button").click(function() { 
    var clicked = this;
    $clicked = $(clicked);
    var target = $clicked.data("target");
    $("#" + target).slideToggle(400);

    $(".rotate").toggle();
  });
});

