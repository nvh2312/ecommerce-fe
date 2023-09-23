$(document).ready(function () {
  let breadcrumbChildren = $(".breadcrumb-content").children();
  let first_breadcrumb = breadcrumbChildren.eq(0);
  let second_breadcrumb = breadcrumbChildren.eq(1);
  let third_breadcrumb = breadcrumbChildren.eq(2);
  let last_breadcrumb = breadcrumbChildren.last();
  first_breadcrumb.on("click", function () {
    if (!first_breadcrumb.is(last_breadcrumb)) {
      window.location.href = "/";
    }
  });
  second_breadcrumb.on("click", function () {
    if (!second_breadcrumb.is(last_breadcrumb)) {
      window.location.href = "/filter.html?page=main";
    }
  });
  third_breadcrumb.on("click", function () {
    if (!third_breadcrumb.is(last_breadcrumb))
      window.location.href = "/filter.html?page=sub";
  });
});
