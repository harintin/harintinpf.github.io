(function ($) {
  $(document).ready(function () {
    // ScrollTrigger 플러그인 등록
    gsap.registerPlugin(ScrollTrigger);

    (function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".header",
            start: "top center",
          },
        })
        .from(".header", {
          opacity: 0,
          y: -200,
          duration: 1,
          ease: "expo.out",
        });
    })();

    // intro 애니메이션
    (function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".intro",
            start: "top center",
          },
        })
        .from(".text_motion", {
          y: "100%",
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.4,
        });

      var typed = new Typed(".typingTxt", {
        strings: [
          "변화하는 시대에 맞춰 편리한<br />코드를 그려내는 웹 아티스트.<br />사용자 친화적인 웹 환경을<br />만들어 갑니다.",
        ],
        typeSpeed: 70,
        backSpeed: 30,
        startDelay: 1800,
        smartBackspace: true,
        cursorChar: "|",
        backDelay: 1000,
      });
    })();

    // menu 애니메이션
    (function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".menu",
            start: "top center",
          },
        })
        .from(".menu_title", {
          y: "100%",
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.4,
        });
    })();

    // about 애니메이션
    (function () {
      ScrollTrigger.defaults({
        toggleActions: "restart pause resume reverse",
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top center",
          },
        })
        .from(".about_title .type", {
          opacity: 0,
          y: "100%",
          stagger: 0.15,
        })
        .add(
          [
            gsap.from(".glass_box01", {
              duration: 0.8,
              opacity: 0,
              y: -300,
              rotate: "30deg",
            }),
            gsap.from(".glass_box02", {
              duration: 0.8,
              opacity: 0,
              y: 300,
              rotate: "-90deg",
            }),
          ],
          "-=0.4"
        );
    })();
  });
})(jQuery);
