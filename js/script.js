$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger,.navbar-main-background").toggleClass("active");
  });
  $(".header_point").click(function (e) {
    $(".header_point,.navbar-panel-contacts-button").toggleClass("active");
  });
  $(".header_point").click(function (e) {
    $(".navbar_burger").toggleClass("active");
  });

  $(window).scroll(function (event) {
    const panel = $(".navbar-panel")[0].getBoundingClientRect();
    console.log(panel);
    const navbar = $(".navbar-main-background");
    if (panel.top < -90) {
      console.log(navbar);
      navbar.addClass("fixed-menu");
    } else {
      navbar.removeClass("fixed-menu");
    }
  });
});

// $(".header_burger").on("click", function () {
//   $(".navbar-main-background").fadeToggle();
// });
// let btnCategories = $(".header_burger");
// let categories = $(".navbar-main-background");
// $(document).click(function (e) {
//   if (
//     !btnCategories.is(e.target) &&
//     btnCategories.has(e.target).length === 0 &&
//     !categories.is(e.target) &&
//     categories.has(e.target).length === 0
//   ) {
//     categories.fadeOut();
//   }
// });
