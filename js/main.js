$(document).ready(function () {
  let category_container = $(".category-container");
  let detail_tv = $("#detail-tv");
  let detail_phone = $("#detail-phone");
  let list_category = $(".list-category");
  let first_category = $(".list-category>li:first-child");
  let second_category = $(".list-category>li:nth-child(2)");
  let sidebar_item = $(".sidebar-item");
  let item_content = $(".sidebar-item>.item-content");
  let list_sub = $(".list-subitems");
  let container_detail = $(".container-detail");

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
  let hostname = window.location.host;
  let base_url =
    hostname.includes("127.0.0.1") || hostname.includes("localhost")
      ? ""
      : `/ecommerce-fe`;
  console.log(hostname);

  let body = $("body");

  $(".main-logo").on("click", function () {
    window.location.href = base_url;
  });

  list_sub.on("click", function () {
    window.location.href = base_url + "/filter.html";
  });

  container_detail.on("click", function () {
    window.location.href = base_url + "/filter.html";
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
    if (item_content.is(e.target) || !!item_content.has(e.target).length) {
      $(this).toggleClass("active");
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
  });

  hide_form_subscribe.on("click", function () {
    container_subscribe.removeClass("active");
  });

  // scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#scrollToTopBtn").fadeIn();
    } else {
      $("#scrollToTopBtn").fadeOut();
    }
  });
  $("#scrollToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
