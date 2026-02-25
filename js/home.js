/* ─── TESTIMONIALS CAROUSEL ─── */

(function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".testimonial-prev");
  const nextBtn = document.querySelector(".testimonial-next");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => t.classList.toggle("active", i === index));
  }

  if (prevBtn && nextBtn && testimonials.length > 0) {
    prevBtn.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });
  }
})();

/* ─── BANNER CAROUSEL ─── */

(function () {
  const banners = [
    {
      img: "images/banner1.jpg",
      title: "CRAFTED THROUGH GENERATIONS",
      subtitle: "Traditional craftsmanship preserved",
    },
    {
      img: "images/banner2.jpg",
      title: "RESTORATION WITH INTEGRITY",
      subtitle: "Authentic repairs, true to history",
    },
    {
      img: "images/banner3.jpg",
      title: "BESPOKE PLASTERWORK, MADE BY HAND",
      subtitle: "Custom pieces, artisan\u2011made",
    },
    {
      img: "images/banner4.jpg",
      title: "EXCELLENCE IN EVERY DETAIL",
      subtitle: "Quality without compromise",
    },
  ];

  let index = 0;

  const mainImg = document.getElementById("mainBannerImage");
  const titleEl = document.getElementById("bannerTitle");
  const subtitleEl = document.getElementById("bannerSubtitle");

  const leftSide = document.querySelector(".banner-left img");
  const rightSide = document.querySelector(".banner-right img");

  function updateBanners() {
    mainImg.src = banners[index].img;
    titleEl.textContent = banners[index].title;
    subtitleEl.textContent = banners[index].subtitle;

    leftSide.src = banners[(index - 1 + banners.length) % banners.length].img;
    rightSide.src = banners[(index + 1) % banners.length].img;
  }

  document.querySelector(".banner-prev").addEventListener("click", () => {
    index = (index - 1 + banners.length) % banners.length;
    updateBanners();
  });

  document.querySelector(".banner-next").addEventListener("click", () => {
    index = (index + 1) % banners.length;
    updateBanners();
  });

  updateBanners();
})();
