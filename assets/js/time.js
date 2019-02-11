var date = new Date();
var hourNow = date.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good afternoon!";
} else if (hourNow > 0) {
  greeting = "Good morning!";
} else {
  greeting = "Welcome!";
}

document.getElementById("greeting").innerHTML = greeting;

// Scroll effect jquery for nav

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("scrollNav");
    $(".navbar-header").addClass("navbar-brand2");
    $("ul").addClass(".liC");
  } else {
    $("nav").removeClass("scrollNav");
    $(".navbar-header").removeClass("navbar-brand2");
    $("ul").removeClass(".liC");
  }
});

// smooth scroll jQuery
$(document).ready(function () {


  $(".scroll-trigger").click(function (e) {

    var linkHref = $(this).attr("href");
    // console.log(linkHref);
    // console.log($(linkHref).offset().top)

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);

    e.preventDefault();

  })

  $(".bars").click(function () {
    if (!$(this).hasClass("xicon")) {
      $(this).addClass("xicon");
    } else {
      $(this).removeClass("xicon");
    }
  })
})
