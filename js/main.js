$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      },
      950: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});
