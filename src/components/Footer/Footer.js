import $ from "jquery"
$("[class^='show-']").click(function () {
  // ^specific value
  if ($(window).width() <= 768) {
    // if the window is less than 768px
    let lists = $(this).next("ul"); //
    lists.slideToggle(1000); // in 1 second
    $(this).toggleClass("expanded"); // add the class expanded
  }
});
