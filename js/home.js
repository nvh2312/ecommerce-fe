$(document).ready(function () {
  let category_container = $(".category-container");
  let detail_tv = $("#detail-tv");
  let detail_phone = $("#detail-phone");
  let list_category = $(".list-category");
  let first_category = $(".list-category>li:first-child");
  let second_category = $(".list-category>li:nth-child(2)");
  let sidebar_item = $(".sidebar-item");
  let sidebar = $(".sidebar");
  let wrapper = $(".wrapper");
  let icon_close = $(".icon-close");
  let bars_icon = $(".bars");
  let search_icon = $("#mobile-search");
  let search_mobile = $(".search-mobile");
  let search_close = $(".search-close");
  let show_social = $(".show-social");
  let list_social = $(".list-social");
  let container_subscribe = $(".subscriber-container");
  let show_form_subscribe = $("#show-subscribe");
  let hide_form_subscribe = $("#hide-subscribe");
  
  let body = $("body");

  const svg_next = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                      <path d="M1.25785 16.7782C1.64834 17.1687 2.28122 17.169 2.67206 16.7782L9.74313 9.70712C10.134 9.31628 10.1336 8.6834 9.74313 8.29291L2.67206 1.22184C2.41837 0.968154 2.06189 0.879593 1.73552 0.956501C1.56047 0.996898 1.39457 1.08511 1.25785 1.22184C0.867004 1.61268 0.867349 2.24556 1.25785 2.63605L7.62181 9.00001L1.25785 15.364C0.867004 15.7548 0.867349 16.3877 1.25785 16.7782Z" fill="#586A84"/>
                    </svg>`;
  const svg_pre = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                    <path d="M9.74313 1.22269C9.35263 0.832193 8.71976 0.831847 8.32891 1.22269L1.25785 8.29376C0.867004 8.6846 0.867349 9.31747 1.25785 9.70797L8.32891 16.779C8.5826 17.0327 8.93909 17.1213 9.26545 17.0444C9.4405 17.004 9.6064 16.9158 9.74313 16.779C10.134 16.3882 10.1336 15.7553 9.74313 15.3648L3.37917 9.00086L9.74313 2.6369C10.134 2.24606 10.1336 1.61319 9.74313 1.22269Z" fill="#586A84"/>
                  </svg>`;

  // slick slide

  $(".banner-container").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  });
  $(".container-product").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    arrows: true,
    draggable: false,
    infinite: false,
    prevArrow: `<button type='button' class='slick-prev pre-item'>${svg_pre}`,
    nextArrow: `<button type='button' class='slick-next next-item'>${svg_next}`,
    responsive: [
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  });

  $(".container-bseller").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    arrows: true,
    draggable: false,
    infinite: false,
    prevArrow: `<button type='button' class='slick-prev pre-item'>${svg_pre}`,
    nextArrow: `<button type='button' class='slick-next next-item'>${svg_next}`,
    responsive: [
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  });

  $(".container-bigdeals").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    arrows: true,
    draggable: false,
    infinite: false,
    prevArrow: `<button type='button' class='slick-prev pre-item'>${svg_pre}`,
    nextArrow: `<button type='button' class='slick-next next-item'>${svg_next}`,
    responsive: [
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  });

  $(document).on("click", function (e) {
    if (
      list_category.hasClass("active-phone") &&
      !detail_phone.is(e.target) &&
      !second_category.is(e.target) &&
      second_category.has(e.target).length === 0 &&
      detail_phone.has(e.target).length === 0
    ) {
      list_category.removeClass("active-phone");
    }
    if (
      list_category.hasClass("active-tv") &&
      !detail_tv.is(e.target) &&
      !first_category.is(e.target) &&
      first_category.has(e.target).length === 0 &&
      detail_tv.has(e.target).length === 0
    ) {
      list_category.removeClass("active-tv");
    }
    if (
      wrapper.hasClass("category-dropdown") &&
      !category_container.is(e.target) &&
      category_container.has(e.target).length === 0
    ) {
      wrapper.removeClass("category-dropdown");
    }
    if (
      wrapper.hasClass("show-sidebar") &&
      !sidebar.is(e.target) &&
      !bars_icon.is(e.target) &&
      bars_icon.has(e.target).length === 0 &&
      sidebar.has(e.target).length === 0
    ) {
      body.css("overflow", "auto");
      wrapper.removeClass("show-sidebar");
    }
  });

  first_category.click(function (e) {
    list_category.toggleClass("active-tv");
  });
  second_category.click(function (e) {
    list_category.toggleClass("active-phone");
  });
  icon_close.on("click", function (e) {
    body.css("overflow", "auto");
    wrapper.removeClass("show-sidebar");
  });
  bars_icon.on("click", function (e) {
    wrapper.addClass("show-sidebar");
    body.css("overflow", "hidden");
  });
  category_container.on("click", function (e) {
    if (!$(e.target).closest("ul, li").length) {
      wrapper.toggleClass("category-dropdown");
    }
  });
  sidebar_item.on("click", function (e) {
    if (
      $(this).hasClass("active") &&
      $(e.target).is($(this).children().first())
    ) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  // scroll top top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#scrollToTopBtn").fadeIn();
    } else {
      $("#scrollToTopBtn").fadeOut();
    }
  });

  // show mobile search

  search_icon.on("click", function () {
    if (!search_mobile.hasClass("active")) {
      search_mobile.addClass("active");
    }
  });

  // close mobile search

  search_close.on("click", function () {
    search_mobile.removeClass("active");
  });

  // toggle right icon top header
  show_social.on("click", function () {
    list_social.toggleClass("active");
  });

  // show/hide form subscribe

  show_form_subscribe.on("click", function () {
    container_subscribe.addClass("active");
  })

  hide_form_subscribe.on("click", function () {
    container_subscribe.removeClass("active");
  })

  // scroll to top
  $("#scrollToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
