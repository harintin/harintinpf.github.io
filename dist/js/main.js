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
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 60%",
            toggleActions: "restart pause resume reverse",
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

    // work 애니메이션
    (function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".work",
            start: "top 40%",
          },
        })
        .from(".work_title .type", {
          x: "-120%",
          duration: 1,
          ease: "expo.out",
          stagger: 0.15,
        });
    })();

    // resume 애니메이션
    (function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".resume",
            start: "top 40%",
            toggleActions: "restart pause resume reverse",
          },
        })
        .from(".resume_title .type", {
          opacity: 0,
          duration: 0.5,
          y: "100%",
          stagger: 0.1,
        })
        .from(
          ".resume_deco.glass_box",
          {
            duration: 0.6,
            opacity: 0,
            y: -200,
            rotate: "60deg",
          },
          "-=0.4"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".resume_ex",
            start: "top 60%",
          },
        })
        .from(".resume_ex_title .type", {
          duration: 0.5,
          y: "100%",
        })
        .from(".resume_ex_list .resume_line", {
          scaleX: 0,
          ease: "expo.out",
          duration: 1.5,
          stagger: 0.3,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".resume_edu",
            start: "top 60%",
          },
        })
        .from(".resume_edu_title .type", {
          duration: 0.5,
          y: "100%",
        })
        .from(".resume_edu_list .resume_line", {
          scaleX: 0,
          ease: "expo.out",
          duration: 1.5,
          stagger: 0.3,
        });
    })();

    // hover
    const list = document.querySelectorAll(".work_list");

    list.forEach((li_img) => {
      li_img.addEventListener("mousemove", function (e) {
        const hoverImage = li_img.querySelector(".hover_image");
        if (hoverImage) {
          const rect = li_img.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          hoverImage.style.transform = `translate(${x}px, ${y}px)`;
        }
      });

      li_img.addEventListener("mouseover", function () {
        const hoverImage = li_img.querySelector(".hover_image");
        if (hoverImage) {
          hoverImage.style.visibility = "visible";
        }
      });

      li_img.addEventListener("mouseleave", function () {
        const hoverImage = li_img.querySelector(".hover_image");
        if (hoverImage) {
          hoverImage.style.visibility = "hidden";
        }
      });
    });
  });
})(jQuery);
