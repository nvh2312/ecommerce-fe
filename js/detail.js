$(document).ready(function () {
  $(".gallery-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: ".gallery-slide",
    infinite: true,
  });
  $(".gallery-slide").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".gallery-main",
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: true,
  });

  $(".modal-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: false,
    asNavFor: ".modal-slide",
    infinite: false,
  });
  $(".modal-slide").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".modal-main",
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: false,
  });

  $(".gallery-main img , .see-more").on("click", function () {
    $(".modal-product").addClass("show");
    $("body").css("overflow", "hidden");
  });
  $(".close-modal").on("click", function () {
    $(".modal-product").removeClass("show");
    $("body").css("overflow", "auto");
  });
  $(".zoom-in").on("click", function () {
    $(".one-big img").css("transform", "scale(1.28)");
  });
  $(".zoom-out").on("click", function () {
    $(".one-big img").css("transform", "scale(0.78125)");
  });
});
