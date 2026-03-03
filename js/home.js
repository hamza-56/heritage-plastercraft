/* ─── TESTIMONIALS CAROUSEL ─── */

(function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".testimonial-prev");
  const nextBtn = document.querySelector(".testimonial-next");
  let currentIndex = 0;
  let animating = false;
  const ANIM_MS = 350;

  function animateTestimonial(newIndex, direction) {
    if (animating || newIndex === currentIndex) return;
    animating = true;

    var current = testimonials[currentIndex];
    var next = testimonials[newIndex];

    var outClass = direction > 0 ? "slide-out-left" : "slide-out-right";
    var inClass = direction > 0 ? "slide-in-left" : "slide-in-right";

    current.classList.add(outClass);

    setTimeout(function () {
      current.classList.remove("active", outClass);
      next.classList.add("active", inClass);

      setTimeout(function () {
        next.classList.remove(inClass);
        currentIndex = newIndex;
        animating = false;
      }, ANIM_MS);
    }, ANIM_MS);
  }

  if (prevBtn && nextBtn && testimonials.length > 0) {
    prevBtn.addEventListener("click", function () {
      var newIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;
      animateTestimonial(newIndex, -1);
    });

    nextBtn.addEventListener("click", function () {
      var newIndex = (currentIndex + 1) % testimonials.length;
      animateTestimonial(newIndex, 1);
    });
  }
})();

/* ─── BANNER CAROUSEL ─── */

(function () {
  const banners = [
    {
      img: "images/banner/banner1.jpg",
      title: "CRAFTED THROUGH GENERATIONS",
      subtitle: "Traditional craftsmanship preserved",
    },
    {
      img: "images/banner/banner2.jpg",
      title: "RESTORATION WITH INTEGRITY",
      subtitle: "Authentic repairs, true to history",
    },
    {
      img: "images/banner/banner3.jpg",
      title: "BESPOKE PLASTERWORK, MADE BY HAND",
      subtitle: "Custom pieces, artisan\u2011made",
    },
    {
      img: "images/banner/banner4.jpg",
      title: "EXCELLENCE IN EVERY DETAIL",
      subtitle: "Quality without compromise",
    },
  ];

  let index = 0;
  let animating = false;
  const ANIM_MS = 300;
  const TIMING = ANIM_MS + "ms ease";

  const mainImg = document.getElementById("main-banner-image");
  const titleEl = document.getElementById("banner-title");
  const subtitleEl = document.getElementById("banner-subtitle");
  const bannerText = document.querySelector(".banner-text");

  const leftSide = document.querySelector(".banner-left");
  const rightSide = document.querySelector(".banner-right");
  const leftImg = leftSide.querySelector("img");
  const rightImg = rightSide.querySelector("img");

  function updateBanners() {
    mainImg.src = banners[index].img;
    titleEl.textContent = banners[index].title;
    subtitleEl.textContent = banners[index].subtitle;

    leftImg.src = banners[(index - 1 + banners.length) % banners.length].img;
    rightImg.src = banners[(index + 1) % banners.length].img;
  }

  function animateTo(newIndex, direction) {
    if (animating) return;
    animating = true;

    var imgOut = direction > 0 ? "slide-out-left" : "slide-out-right";
    var imgIn = direction > 0 ? "slide-in-from-right" : "slide-in-from-left";
    var txtOut = direction > 0 ? "text-out-left" : "text-out-right";
    var txtIn = direction > 0 ? "text-in-from-right" : "text-in-from-left";

    // Slide out + fade sides
    mainImg.style.animation = imgOut + " " + TIMING + " forwards";
    bannerText.style.animation = txtOut + " " + TIMING + " forwards";
    leftSide.classList.add("fade-out");
    rightSide.classList.add("fade-out");

    setTimeout(function () {
      // Swap content
      index = newIndex;
      updateBanners();

      // Slide in
      mainImg.style.animation = imgIn + " " + TIMING;
      bannerText.style.animation = txtIn + " " + TIMING;
      leftSide.classList.remove("fade-out");
      rightSide.classList.remove("fade-out");

      setTimeout(function () {
        mainImg.style.animation = "";
        bannerText.style.animation = "";
        animating = false;
      }, ANIM_MS);
    }, ANIM_MS);
  }

  document.querySelector(".banner-prev").addEventListener("click", function () {
    animateTo((index - 1 + banners.length) % banners.length, -1);
  });

  document.querySelector(".banner-next").addEventListener("click", function () {
    animateTo((index + 1) % banners.length, 1);
  });

  updateBanners();
})();
