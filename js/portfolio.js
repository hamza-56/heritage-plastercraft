/* ─── FILTER ─── */

(function () {
  const btns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      items.forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
})();

/* ─── LIGHTBOX ─── */

(function () {
  const lightbox = document.getElementById("lightbox");
  const lbImage = document.getElementById("lightboxImage");
  const lbVideo = document.getElementById("lightboxVideo");
  const lbTitle = document.getElementById("lightboxTitle");
  const lbCaption = document.getElementById("lightboxCaption");
  const lbCurrent = document.getElementById("lightboxCurrent");
  const lbTotal = document.getElementById("lightboxTotal");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");

  let visibleItems = [];
  let currentIndex = 0;

  function getVisibleItems() {
    return Array.from(document.querySelectorAll(".portfolio-item")).filter(
      (item) => item.style.display !== "none",
    );
  }

  function pauseVideo() {
    if (lbVideo) {
      lbVideo.pause();
      lbVideo.removeAttribute("src");
      lbVideo.load();
    }
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    pauseVideo();
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const item = visibleItems[currentIndex];
    const videoSrc = item.dataset.video;

    if (videoSrc) {
      lbImage.style.display = "none";
      lbVideo.style.display = "";
      lbVideo.src = videoSrc;
      lbVideo.play();
    } else {
      pauseVideo();
      lbVideo.style.display = "none";
      lbImage.style.display = "";
      lbImage.src = item.querySelector("img").src;
    }

    lbTitle.textContent = item.dataset.title;
    lbCaption.textContent = item.dataset.caption;
    lbCurrent.textContent = currentIndex + 1;
    lbTotal.textContent = visibleItems.length;
  }

  function navigate(direction) {
    pauseVideo();
    currentIndex =
      (currentIndex + direction + visibleItems.length) % visibleItems.length;
    updateLightbox();
  }

  document.querySelectorAll(".portfolio-item").forEach((item) => {
    item.addEventListener("click", () => {
      const visible = getVisibleItems();
      const idx = visible.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => navigate(-1));
  nextBtn.addEventListener("click", () => navigate(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });
})();
