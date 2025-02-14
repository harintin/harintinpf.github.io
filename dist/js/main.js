(function ($) {
  $(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

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
          duration: 1,
          ease: "expo.out",
          stagger: 0.3,
        });

      new Typed(".typingTxt", {
        strings: [
          "변화하는 시대에 맞춰 편리한<br />코드를 그려내는 웹 퍼블리셔.<br />사용자 친화적이고 감각적인<br />웹 환경을 만들어 갑니다.",
        ],
        typeSpeed: 40,
        backSpeed: 30,
        startDelay: 1400,
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
        )
        .from(
          ".about_txt .type",
          {
            duration: 0.5,
            y: "120%",
            stagger: 0.25,
            ease: "expo.out",
          },
          "-=0.3"
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
          opacity: 0,
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
            start: "top 60%",
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
          duration: 1.2,
          stagger: 0.3,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".resume_bottom",
            start: "top center",
          },
        })
        .add([
          gsap.from(".resume_skill_title .type", {
            duration: 0.5,
            y: "100%",
          }),
          gsap.from(".resume_skill_list", {
            duration: 0.5,
            opacity: 0,
            y: "100%",
            stagger: 0.15,
          }),
        ])
        .add(
          [
            gsap.from(".resume_lan_title .type", {
              duration: 0.5,
              y: "100%",
            }),
          ],
          "-=1.2"
        )
        .from(
          ".resume_lan_txts",
          {
            duration: 0.5,
            opacity: 0,
            y: "-100%",
            stagger: 0.15,
          },
          "-=1"
        );
    })();

    // contact 애니메이션
    (function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact",
            start: "top top",
            pin: true,
            scrub: 3,
          },
        })
        .to(".contact_txt_bf", {
          display: "none",
          opacity: 0,
          filter: "blur(50px)",
        })
        .add(
          [
            gsap.from(".contact_txt", {
              display: "none",
              opacity: 0,
              filter: "blur(10px)",
              scale: 8,
            }),
            gsap.fromTo(
              ".contact_bg",
              { clipPath: "circle(0% at 50% 50%)" },
              {
                clipPath: "circle(100% at 50% 50%)",
                ease: "power1.inOut",
              }
            ),
          ],
          "-=0.4"
        )
        .from(".contact_link", {
          opacity: 0,
        });
    })();

    window.addEventListener("resize", ScrollTrigger.update);

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

    // menu
    const menuLinks = document.querySelectorAll(".menu_box");

    menuLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        lenis.scrollTo(targetElement, {
          duration: 1.5,
          offset: 0,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      });
    });
  });
})(jQuery);
