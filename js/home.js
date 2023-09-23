$(document).ready(function () {
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
});
