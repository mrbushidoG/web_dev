$(function () {
  var $window = $(window);
  var $slideAd = $("#slideAd");
  var endZone = $("#footer").offset().top - $window.height() - 500;
  var lastScrollTop = 0;

  console.log(endZone);

  $window.on("scroll", function () {
    var currentScrollTop = $window.scrollTop();

    if (currentScrollTop > lastScrollTop) {
      // Scroll Down
      if (endZone < currentScrollTop) {
        $slideAd.animate({ right: "0px" }, 250);
      }
    } else {
      // Scroll Up
      $slideAd.animate({ right: "-360px" }, 50);
    }

    lastScrollTop = currentScrollTop;
  });
});
