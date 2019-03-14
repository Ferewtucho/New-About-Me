$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $("nav").addClass("scroll");
      $(".navigaion__logo").addClass("scroll__logo");
      $(".navigation__logo-img").addClass("scroll__logo-img");
      $(".navigaion__list").addClass("scroll__list");
      $(".navigation__link").addClass("scroll__link");
    } else {
      $("nav").removeClass("scroll");
      $(".navigaion__logo").removeClass("scroll__logo");
      $(".navigation__logo-img").removeClass("scroll__logo-img");
      $(".navigaion__list").removeClass("scroll__list");
      $(".navigation__link").removeClass("scroll__link");
    }
  });

  $(".scroll-trigger").click(function(e) {
    var linkHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(linkHref).offset().top
      },
      1000
    );

    e.preventDefault();
  });
});
