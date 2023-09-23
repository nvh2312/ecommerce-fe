$(document).ready(function () {
  let urlParams = new URLSearchParams(window.location.search);
  let pageValue = urlParams.get("page");
  let title = $(".first-header .heading-title h2");
  let all_category = $(".filter-container").children().eq(0);
  let sub_category = $(".filter-container").children().eq(1);
  let processor_category = $(".filter-container").children().eq(3);
  let ram_category = $(".filter-container").children().eq(4);
  let filter_dropdown = $(".filter-dropdown");
  let filter_show = $(".filter-dropdown>.dropdown-show");
  let category_dropdown = $(".category-dropdown");
  let dropdown_show = $(".category-dropdown>.dropdown-show");
  let item_color = $(".item-row");
  let item_option = $(".item-option");
  let sort_option = $(".sort-option");
  let page_option = $(".page-option");
  let display_grid = $(".display-grid");
  let display_list = $(".display-list");
  let display_container = $(".display-container");
  let body_display = $(".body-display");
  const list_product = [
    {
      category: "Smartphones",
      name: `Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"`,
      image: "./images/phones/phone1.png",
      price: "$1,200.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Mobile Phone Nokia 8210, Dual SIM, 4G`,
      image: "./images/phones/phone2.png",
      price: "$60.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Samsung Galaxy S22,Exynos 2200 Octa-Core`,
      image: "./images/phones/phone3.png",
      price: "$640.00",
      price_discount: "$600.00",
    },
    {
      category: "Smartphones",
      name: `Huawei Nova 9, Qualcomm SM7325 Snapdragon 778G`,
      image: "./images/phones/phone4.png",
      price: "$300.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Samsung Galaxy Note 10, Snapdragon 855 Octa-core`,
      image: "./images/phones/phone5.png",
      price: "$480.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Honor 70, Qualcomm SM7325-AE Snapdragon 778G+ 5G`,
      image: "./images/phones/phone6.png",
      price: "$440.00",
      price_discount: "$420.00",
    },
    {
      category: "Smartphones",
      name: `Apple iPhone 14 Pro Max, LTPO Super Retina XDR OLED 6.7"`,
      image: "./images/phones/phone7.png",
      price: "$1,340.00",
      price_discount: "$1,240.00",
    },
    {
      category: "Smartphones",
      name: `Apple iPhone 14 Pro Max, LTPO Super Retina XDR OLED 6.7"`,
      image: "./images/phones/phone8.png",
      price: "$1,340.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Apple iPhone 14 Pro Max, LTPO Super Retina XDR OLED 6.7"`,
      image: "./images/phones/phone9.png",
      price: "$1,340.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Apple iPhone SE (2022), Apple A15 Bionic Hexa-core`,
      image: "./images/phones/phone10.png",
      price: "$440.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Xiaomi 11T, MediaTek MT6893 Dimensity 1200 5G, AMOLED`,
      image: "./images/phones/phone11.png",
      price: "$230.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Xiaomi Mi 11 Ultra,Qualcomm SM8350 Snapdragon 888`,
      image: "./images/phones/phone12.png",
      price: "$400.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Apple iPhone 14 Pro Max, LTPO Super Retina XDR OLED 6.7"`,
      image: "./images/phones/phone13.png",
      price: "$1,340.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Apple iPhone SE (2022), Apple A15 Bionic Hexa-core`,
      image: "./images/phones/phone14.png",
      price: "$440.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Xiaomi 11T, MediaTek MT6893 Dimensity 1200 5G, AMOLED`,
      image: "./images/phones/phone15.png",
      price: "$230.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Xiaomi Mi 11 Ultra,Qualcomm SM8350 Snapdragon 888`,
      image: "./images/phones/phone16.png",
      price: "$400.00",
      price_discount: "$389.00",
    },
    {
      category: "Smartphones",
      name: `Apple iPhone 14 Pro Max, LTPO Super Retina XDR OLED 6.7"`,
      image: "./images/phones/phone17.png",
      price: "$1,340.00",
      price_discount: "$1,260.00",
    },
    {
      category: "Smartphones",
      name: `Apple iPhone SE (2022), Apple A15 Bionic Hexa-core`,
      image: "./images/phones/phone18.png",
      price: "$440.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Xiaomi 11T, MediaTek MT6893 Dimensity 1200 5G, AMOLED`,
      image: "./images/phones/phone19.png",
      price: "$230.00",
      price_discount: "",
    },
    {
      category: "Smartphones",
      name: `Xiaomi Mi 11 Ultra,Qualcomm SM8350 Snapdragon 888`,
      image: "./images/phones/phone20.png",
      price: "$400.00",
      price_discount: "",
    },
  ];
  if (pageValue === "main") {
    all_category.css("display", "none");
    processor_category.css("display", "none");
    ram_category.css("display", "none");
    title.html("Smartphones");
    $(".breadcrumb-content").children().eq(2).remove();
  } else if (pageValue === "sub") {
    all_category.css("display", "none");
    title.html("Telephones");
  } else {
    sub_category.css("display", "none");
    processor_category.css("display", "none");
    ram_category.css("display", "none");
    title.html("Shop");
    $(".breadcrumb-content").children().eq(2).remove();
    $(".breadcrumb-content").children().eq(1).remove();
  }

  all_category.find(".dropdown-hide").on("click", function () {
    window.location.search = "?page=" + "main";
  });

  sub_category.find(".dropdown-hide").on("click", function () {
    window.location.search = "?page=" + "sub";
  });

  // show product
  function showProduct(style = "list") {
    const todetail = `'${base_url}/detail.html'`;
    let html = ``;
    body_display.empty();
    if (style === "list") {
      list_product.forEach((value) => {
        html += `
          <div class="product-item">
            <div class="product-card" onclick="window.location.href = ${todetail}">
              <div class="card-header">
                <h4 class="category-product">${value.category}</h4>
                <h3 class="product-name">
                ${value.name}
                </h3>
              </div>
              <div class="card-body">
                <img src="${value.image}" class="product-img">
              </div>
              <div class="card-footer">
                <div class="product-price">
                ${
                  value?.price_discount
                    ? `<span class="text-price text-deal">${value.price_discount}</span>
                   <span class="price-deal">${value.price}</span>`
                    : `<span class="text-price">${value.price}</span>`
                }
                </div>
                <div class="action-user">
                  <div class="icon-product add-compare">
                    <div class="icon-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 3.23571C13.6301 3.10553 13.6301 2.89448 13.5 2.7643L11.638 0.902377C11.428 0.692388 11.069 0.84111 11.069 1.13808V2.33337H9.07003V2.33346C8.22245 2.33357 7.44878 2.65002 6.86065 3.17119C7.14983 3.53297 7.37751 3.94605 7.52787 4.3946C7.89459 3.95021 8.44954 3.66692 9.07067 3.66676V3.66671H11.069V4.86194C11.069 5.1589 11.428 5.30763 11.638 5.09764L13.5 3.23571ZM13.5 11.2357C13.6301 11.1055 13.6301 10.8945 13.5 10.7643L11.638 8.90238C11.428 8.69239 11.069 8.84111 11.069 9.13808V10.3334H9.07003V10.3333C7.96606 10.3326 7.07134 9.43748 7.07134 8.33334L7.06899 8.33334V5.66671V5.66667C7.06897 3.82591 5.57686 2.33365 3.73617 2.33337V2.33331H1.0695C0.701309 2.33331 0.402832 2.63178 0.402832 2.99997C0.402832 3.36816 0.701308 3.66664 1.0695 3.66664H3.73566V3.66671C4.84023 3.66671 5.73566 4.56213 5.73566 5.66671L5.73566 8.33334L5.7367 8.33334V8.3334H5.73526C5.73526 8.56171 5.75821 8.78466 5.80194 9.00006C5.90189 9.49243 6.11036 9.9454 6.4013 10.3329L6.40204 10.3319C7.01012 11.1424 7.97884 11.6667 9.07003 11.6667V11.6667H11.069V12.8619C11.069 13.1589 11.428 13.3076 11.638 13.0976L13.5 11.2357ZM0.402832 11C0.402832 10.6318 0.701309 10.3333 1.0695 10.3333H3.73343V10.3332H3.73366C4.35423 10.3332 4.90879 10.0506 5.27563 9.60701C5.42609 10.0553 5.6538 10.4681 5.94294 10.8297C5.3553 11.35 4.58263 11.6659 3.73617 11.6664V11.6666H1.0695C0.701308 11.6666 0.402832 11.3682 0.402832 11ZM3.73424 4.99976L3.70161 4.99991H3.73343V6.33322H3.73366L3.73489 6.33322V4.99994H3.76932L3.73424 4.99976ZM9.07048 9.00012H9.07067V7.66676H9.07024V9.00012L9.07048 9.00012Z" fill="#586A84"></path>
                      </svg>
                      <div class="tooltip-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8" fill="none">
                          <path d="M4 4L0 0L0 8L4 4Z" fill="#1D232C"></path>
                        </svg>
                        <div class="tooltip-name">Compare</div>
                      </div>
                    </div>
                  </div>
                  <div class="icon-product add-listwish">
                    <div class="icon-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M1.3898 1.17276C-0.0186066 2.58117 -0.0186066 4.86468 1.3898 6.27309L7.00016 11.8834L12.6105 6.27309C14.0189 4.86468 14.0189 2.58117 12.6105 1.17276C11.2021 -0.235648 8.91861 -0.235648 7.51019 1.17276L7.00016 1.6828L6.49013 1.17276C5.08172 -0.235648 2.79822 -0.235648 1.3898 1.17276Z" fill="#586A84"></path>
                      </svg>
                      <div class="tooltip-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8" fill="none">
                          <path d="M4 4L0 0L0 8L4 4Z" fill="#1D232C"></path>
                        </svg>
                        <div class="tooltip-name">Wishlist</div>
                      </div>
                    </div>
                  </div>
                  <div class="icon-product add-cart">
                    <div class="icon-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66527 3.66671V3.66674H1.46914C1.12302 3.66674 0.834471 3.93162 0.804912 4.27647L0.0620545 12.9431C0.0286922 13.3324 0.335632 13.6667 0.726285 13.6667H11.2738C11.6644 13.6667 11.9714 13.3324 11.938 12.9431L11.1952 4.27647C11.1656 3.93162 10.877 3.66674 10.5309 3.66674H9.33193V3.66671C9.33193 1.82576 7.83955 0.333374 5.9986 0.333374C4.15765 0.333374 2.66527 1.82576 2.66527 3.66671ZM5.99808 1.66677C4.89352 1.66677 3.9981 2.56219 3.99808 3.66674H7.99808C7.99806 2.56219 7.10264 1.66677 5.99808 1.66677ZM5.99687 8.99994C7.81927 8.99994 9.30009 7.53748 9.32975 5.72215C9.33126 5.70388 9.33203 5.68539 9.33203 5.66672C9.33203 5.29853 9.03355 5.00006 8.66536 5.00006C8.29717 5.00006 7.9987 5.29852 7.99869 5.66671H7.99635C7.99634 6.77126 7.10091 7.66667 5.99635 7.66667C4.90982 7.66667 4.02565 6.80025 3.99707 5.72061C3.99849 5.70281 3.99922 5.68482 3.99922 5.66666C3.99922 5.29847 3.70074 4.99999 3.33255 4.99999C2.96436 4.99999 2.66588 5.29847 2.66588 5.66666V5.66671H2.66393V5.61506C2.66367 5.63221 2.66354 5.64939 2.66354 5.66661C2.66354 7.50756 4.15592 8.99994 5.99687 8.99994Z" fill="white"></path>
                      </svg>
                      <div class="tooltip-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8" fill="none">
                          <path d="M4 4L0 0L0 8L4 4Z" fill="#1D232C"></path>
                        </svg>
                        <div class="tooltip-name">Add to Cart</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    } else {
      list_product.forEach((value) => {
        html += `
        <div class="product-item">
        <div class="product-card product-list" onclick="window.location.href = ${todetail}";>
          <div class="product-image">
            <img src="${value.image}" alt="product" />
          </div>
          <div class="product-info">
            <div class="card-header">
              <h4 class="category-product">${value.category}, Telephones</h4>
              <h3 class="product-name">
              ${value.name}
              </h3>
              <div class="product-rate">
                <svg
                  width="99"
                  height="17"
                  viewBox="0 0 99 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.93715 0.246003C8.06972 -0.0767931 8.52124 -0.0767925 8.65381 0.246004L10.668 5.15057C10.7239 5.28665 10.8503 5.37963 10.9954 5.39141L16.2236 5.8159C16.5677 5.84384 16.7072 6.27874 16.445 6.50617L12.4617 9.96185C12.3512 10.0577 12.3029 10.2082 12.3367 10.3515L13.5536 15.5185C13.6337 15.8585 13.2684 16.1273 12.9739 15.9451L8.49777 13.1762C8.37358 13.0994 8.21738 13.0994 8.09319 13.1762L3.61711 15.9451C3.32251 16.1273 2.95723 15.8585 3.03732 15.5185L4.2543 10.3515C4.28807 10.2082 4.2398 10.0577 4.12928 9.96185L0.145929 6.50617C-0.116237 6.27874 0.0232898 5.84384 0.367387 5.8159L5.5956 5.39141C5.74067 5.37963 5.86703 5.28665 5.92292 5.15057L7.93715 0.246003Z"
                    fill="#FFC045"
                  ></path>
                  <path
                    d="M28.5084 0.246003C28.641 -0.0767931 29.0925 -0.0767925 29.2251 0.246004L31.2393 5.15057C31.2952 5.28665 31.4216 5.37963 31.5666 5.39141L36.7949 5.8159C37.139 5.84384 37.2785 6.27874 37.0163 6.50617L33.033 9.96185C32.9224 10.0577 32.8742 10.2082 32.9079 10.3515L34.1249 15.5185C34.205 15.8585 33.8397 16.1273 33.5451 15.9451L29.0691 13.1762C28.9449 13.0994 28.7887 13.0994 28.6645 13.1762L24.1884 15.9451C23.8938 16.1273 23.5285 15.8585 23.6086 15.5185L24.8256 10.3515C24.8594 10.2082 24.8111 10.0577 24.7006 9.96185L20.7172 6.50617C20.4551 6.27874 20.5946 5.84384 20.9387 5.8159L26.1669 5.39141C26.312 5.37963 26.4383 5.28665 26.4942 5.15057L28.5084 0.246003Z"
                    fill="#FFC045"
                  ></path>
                  <path
                    d="M49.0797 0.246003C49.2123 -0.0767931 49.6638 -0.0767925 49.7964 0.246004L51.8106 5.15057C51.8665 5.28665 51.9929 5.37963 52.1379 5.39141L57.3662 5.8159C57.7102 5.84384 57.8498 6.27874 57.5876 6.50617L53.6043 9.96185C53.4937 10.0577 53.4455 10.2082 53.4792 10.3515L54.6962 15.5185C54.7763 15.8585 54.411 16.1273 54.1164 15.9451L49.6403 13.1762C49.5162 13.0994 49.36 13.0994 49.2358 13.1762L44.7597 15.9451C44.4651 16.1273 44.0998 15.8585 44.1799 15.5185L45.3969 10.3515C45.4306 10.2082 45.3824 10.0577 45.2719 9.96185L41.2885 6.50617C41.0263 6.27874 41.1659 5.84384 41.51 5.8159L46.7382 5.39141C46.8832 5.37963 47.0096 5.28665 47.0655 5.15057L49.0797 0.246003Z"
                    fill="#FFC045"
                  ></path>
                  <path
                    d="M69.651 0.246003C69.7836 -0.0767931 70.2351 -0.0767925 70.3677 0.246004L72.3819 5.15057C72.4378 5.28665 72.5642 5.37963 72.7092 5.39141L77.9374 5.8159C78.2815 5.84384 78.4211 6.27874 78.1589 6.50617L74.1755 9.96185C74.065 10.0577 74.0168 10.2082 74.0505 10.3515L75.2675 15.5185C75.3476 15.8585 74.9823 16.1273 74.6877 15.9451L70.2116 13.1762C70.0874 13.0994 69.9312 13.0994 69.8071 13.1762L65.331 15.9451C65.0364 16.1273 64.6711 15.8585 64.7512 15.5185L65.9682 10.3515C66.0019 10.2082 65.9537 10.0577 65.8431 9.96185L61.8598 6.50617C61.5976 6.27874 61.7372 5.84384 62.0813 5.8159L67.3095 5.39141C67.4545 5.37963 67.5809 5.28665 67.6368 5.15057L69.651 0.246003Z"
                    fill="#FFC045"
                  ></path>
                  <path
                    d="M90.2233 0.246003C90.3559 -0.0767931 90.8074 -0.0767925 90.9399 0.246004L92.9542 5.15057C93.0101 5.28665 93.1364 5.37963 93.2815 5.39141L98.5097 5.8159C98.8538 5.84384 98.9933 6.27874 98.7312 6.50617L94.7478 9.96185C94.6373 10.0577 94.589 10.2082 94.6228 10.3515L95.8398 15.5185C95.9199 15.8585 95.5546 16.1273 95.26 15.9451L90.7839 13.1762C90.6597 13.0994 90.5035 13.0994 90.3793 13.1762L85.9032 15.9451C85.6086 16.1273 85.2434 15.8585 85.3235 15.5185L86.5404 10.3515C86.5742 10.2082 86.5259 10.0577 86.4154 9.96185L82.4321 6.50617C82.1699 6.27874 82.3094 5.84384 82.6535 5.8159L87.8817 5.39141C88.0268 5.37963 88.1532 5.28665 88.209 5.15057L90.2233 0.246003Z"
                    fill="#FFC045"
                  ></path>
                </svg>
                <div class="text-normal font-bold">4.99</div>
                <div class="text-normal text-quantity">365</div>
              </div>
              <div class="product-description">
                <ul>
                  <li class="text-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit
                  </li>
                  <li class="text-normal">
                    Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                  </li>
                  <li class="text-normal">
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                  </li>
                </ul>
              </div>
              <div class="sku-product text-normal">SKU: 29087645</div>
            </div>
          </div>
          <div class="list-last">
            <div class="product-todo">
              <div class="todo-item">
                <div class="text-normal">Compare</div>
                <div class="icon-todo">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.4995 3.23632C13.6296 3.10614 13.6296 2.89509 13.4995 2.76491L11.6375 0.902987C11.4276 0.692999 11.0685 0.84172 11.0685 1.13869V2.33398H9.06954V2.33407C8.22196 2.33418 7.44829 2.65063 6.86016 3.1718C7.14934 3.53358 7.37702 3.94666 7.52738 4.39521C7.8941 3.95082 8.44905 3.66753 9.07018 3.66737V3.66732H11.0685V4.86255C11.0685 5.15951 11.4276 5.30824 11.6375 5.09825L13.4995 3.23632ZM13.4995 11.2363C13.6296 11.1061 13.6296 10.8951 13.4995 10.7649L11.6375 8.90299C11.4276 8.693 11.0685 8.84172 11.0685 9.13869V10.334H9.06954V10.334C7.96557 10.3332 7.07085 9.43809 7.07085 8.33395L7.0685 8.33395V5.66732V5.66728C7.06849 3.82653 5.57638 2.33426 3.73568 2.33398V2.33392H1.06901C0.700821 2.33392 0.402344 2.63239 0.402344 3.00058C0.402344 3.36877 0.70082 3.66725 1.06901 3.66725H3.73517V3.66732C4.83974 3.66732 5.73517 4.56274 5.73517 5.66732L5.73517 8.33395L5.73621 8.33395V8.33401H5.73477C5.73477 8.56232 5.75773 8.78527 5.80145 9.00067C5.9014 9.49304 6.10987 9.94601 6.40082 10.3335L6.40156 10.3325C7.00963 11.143 7.97835 11.6673 9.06954 11.6673V11.6673H11.0685V12.8625C11.0685 13.1595 11.4276 13.3082 11.6375 13.0982L13.4995 11.2363ZM0.402344 11.0006C0.402344 10.6324 0.700821 10.3339 1.06901 10.3339H3.73294V10.3338H3.73317C4.35374 10.3338 4.9083 10.0512 5.27514 9.60762C5.42561 10.0559 5.65331 10.4687 5.94245 10.8303C5.35481 11.3506 4.58214 11.6666 3.73568 11.667V11.6673H1.06901C0.70082 11.6673 0.402344 11.3688 0.402344 11.0006ZM3.73376 5.00037L3.70112 5.00052H3.73294V6.33383H3.73317L3.7344 6.33383V5.00055H3.76883L3.73376 5.00037ZM9.06999 9.00073H9.07018V7.66737H9.06975V9.00074L9.06999 9.00073Z"
                      fill="#586A84"
                    />
                  </svg>
                </div>
              </div>
              <div class="todo-item">
                <div class="text-normal">Wishlist</div>
                <div class="icon-todo">
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.88932 1.1735C0.480905 2.58191 0.480905 4.86541 1.88932 6.27382L7.49967 11.8842L13.11 6.27382C14.5184 4.86541 14.5184 2.58191 13.11 1.1735C11.7016 -0.234915 9.41812 -0.234915 8.00971 1.1735L7.49967 1.68353L6.98964 1.1735C5.58123 -0.234915 3.29773 -0.234915 1.88932 1.1735Z"
                      fill="#586A84"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="product-price">
            ${
              value?.price_discount
                ? `<span class="text-price text-deal">${value.price_discount}</span>
               <span class="price-deal">${value.price}</span>`
                : `<span class="text-price">${value.price}</span>`
            }
            </div>
            <div class="addcart-product">
              <div class="text-cart">
                Add to cart
              </div>
              <div class="icon-tocart">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.16527 3.66732V3.66735H1.96914C1.62302 3.66735 1.33447 3.93223 1.30491 4.27708L0.562054 12.9438C0.528692 13.333 0.835632 13.6674 1.22629 13.6674H11.7738C12.1644 13.6674 12.4714 13.333 12.438 12.9438L11.6952 4.27708C11.6656 3.93223 11.377 3.66735 11.0309 3.66735H9.83193V3.66732C9.83193 1.82637 8.33955 0.333984 6.4986 0.333984C4.65765 0.333984 3.16527 1.82637 3.16527 3.66732ZM6.49808 1.66738C5.39352 1.66738 4.4981 2.5628 4.49808 3.66735H8.49808C8.49806 2.5628 7.60264 1.66738 6.49808 1.66738ZM6.49687 9.00055C8.31927 9.00055 9.80009 7.53809 9.82975 5.72276C9.83126 5.70449 9.83203 5.686 9.83203 5.66733C9.83203 5.29914 9.53355 5.00067 9.16536 5.00067C8.79717 5.00067 8.4987 5.29914 8.49869 5.66732H8.49635C8.49634 6.77187 7.60091 7.66728 6.49635 7.66728C5.40982 7.66728 4.52565 6.80086 4.49707 5.72122C4.49849 5.70342 4.49922 5.68543 4.49922 5.66727C4.49922 5.29908 4.20074 5.0006 3.83255 5.0006C3.46436 5.0006 3.16588 5.29908 3.16588 5.66727V5.66732H3.16393V5.61567C3.16367 5.63282 3.16354 5.65001 3.16354 5.66722C3.16354 7.50817 4.65592 9.00055 6.49687 9.00055Z" fill="white"/>
                  </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
      });
    }
    body_display.append(html);
  }

  showProduct();

  display_list.on("click", function (e) {
    if (display_container.hasClass("active-grid")) {
      showProduct();
      display_container.removeClass("active-grid");
    }
  });

  display_grid.on("click", function (e) {
    if (!display_container.hasClass("active-grid")) {
      showProduct("grid");
      display_container.addClass("active-grid");
    }
  });

  item_option.on("click", function (e) {
    if (
      sort_option.is(e.target) ||
      !!sort_option.has(e.target).length ||
      page_option.is(e.target) ||
      !!page_option.has(e.target).length
    ) {
      $(this).toggleClass("active");
    }
  });
  filter_dropdown.on("click", function (e) {
    if (filter_show.is(e.target) || !!filter_show.has(e.target).length) {
      $(this).toggleClass("active");
    }
  });
  category_dropdown.on("click", function (e) {
    if (dropdown_show.is(e.target) || !!dropdown_show.has(e.target).length) {
      $(this).toggleClass("active");
    }
  });
  item_color.on("click", function () {
    $(this).toggleClass("active");
  });
});
