$(document).ready(function(){

  $(".btn").on("click", function() {
    $(".sidebar").animate({marginLeft: "0"}, "ease-out");
  });

  $(".sidebar").on("mouseleave", function() {
    $(".sidebar").animate({marginLeft: "-300px"}, "ease-out");
  });

});
