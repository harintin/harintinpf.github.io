(function ($) {
  $(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    // Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    // GSAP과 Lenis 동기화
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  });
})(jQuery);
