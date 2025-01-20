(function ($) {
  $(document).ready(function () {
    // ScrollTrigger 플러그인 등록
    gsap.registerPlugin(ScrollTrigger);
    //Scroll Trigger 설정
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume reverse",
    });

    // marquee
    const $container = $(".marquee_container");
    const $marqueeItems = $(".marquee_items");
    const $marqueeItem = $(".marquee_item");

    function fillMarquee() {
      const containerWidth = $container.outerWidth();
      let totalWidth = 0;

      // Keep duplicating items until the total width exceeds the container's width
      while (totalWidth < containerWidth * 2) {
        $marqueeItems.append($marqueeItem.clone());
        totalWidth = $marqueeItems.outerWidth();
      }
    }

    fillMarquee(); // Ensure enough items for a seamless loop
  });
});
