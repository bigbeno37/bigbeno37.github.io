$(window).scroll(function(event) {

  $(".project").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animated fadeInDown");
    }
  });

});

$(function() {
  $(".bg-projects").css("height", $(".projects").height() + 20);
});
