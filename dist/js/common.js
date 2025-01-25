(function ($) {
  $(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    // marquee
    const $container = $(".marquee_container");
    const $marqueeItems = $(".marquee_items");
    const $marqueeItem = $(".marquee_item");

    function fillMarquee() {
      const containerWidth = $container.outerWidth();
      let totalWidth = 0;

      while (totalWidth < containerWidth * 2) {
        $marqueeItems.append($marqueeItem.clone());
        totalWidth = $marqueeItems.outerWidth();
      }
    }

    fillMarquee();
  });
});
