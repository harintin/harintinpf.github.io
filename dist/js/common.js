(function ($) {
  $(document).ready(function () {
    //Scroll Trigger 설정
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume reverse",
    });

    //lenis 설정
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
});
