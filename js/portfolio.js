/* ─── FILTER + CATEGORY NAV ─── */

(function () {
  const btns = Array.from(document.querySelectorAll(".filter-btn"));
  const items = Array.from(document.querySelectorAll(".portfolio-item"));
  const grid = document.querySelector(".portfolio-grid");
  const filtersBar = document.querySelector(".portfolio-filters");
  const filterNav = document.querySelector(".filter-nav");
  const navLabel = document.querySelector(".filter-nav-label");
  const navPrev = document.querySelector(".filter-nav-prev");
  const navNext = document.querySelector(".filter-nav-next");
  const navBack = document.querySelector(".filter-nav-back");

  /* Category order from buttons (skip "all") */
  const categories = btns
    .filter(function (b) { return b.dataset.filter !== "all"; })
    .map(function (b) { return { filter: b.dataset.filter, label: b.textContent.trim() }; });

  var activeCatIndex = -1;

  /* Show "All" grid (default) */
  function showAllGrid() {
    activeCatIndex = -1;
    items.forEach(function (item) { item.style.display = ""; });
    grid.style.display = "";
    filtersBar.style.display = "";
    filterNav.style.display = "none";

    btns.forEach(function (b) { b.classList.remove("active"); });
    btns[0].classList.add("active");
  }

  /* Show filtered grid for a category */
  function showCategory(index) {
    activeCatIndex = index;
    var cat = categories[index];

    /* Hide all filters, show nav strip */
    filtersBar.style.display = "none";
    filterNav.style.display = "";
    navLabel.textContent = cat.label;

    /* Filter grid items */
    grid.style.display = "";
    items.forEach(function (item) {
      item.style.display = item.dataset.category === cat.filter ? "" : "none";
    });

    /* Update active button state (for lightbox reference) */
    btns.forEach(function (b) { b.classList.remove("active"); });
    btns.forEach(function (b) {
      if (b.dataset.filter === cat.filter) b.classList.add("active");
    });
  }

  /* Filter button clicks */
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.dataset.filter;
      if (filter === "all") {
        showAllGrid();
      } else {
        var idx = categories.findIndex(function (c) { return c.filter === filter; });
        if (idx !== -1) showCategory(idx);
      }
    });
  });

  /* Nav arrow clicks */
  navPrev.addEventListener("click", function () {
    var idx = (activeCatIndex - 1 + categories.length) % categories.length;
    showCategory(idx);
  });

  navNext.addEventListener("click", function () {
    var idx = (activeCatIndex + 1) % categories.length;
    showCategory(idx);
  });

  /* Back to All */
  navBack.addEventListener("click", function () {
    showAllGrid();
  });
})();

/* ─── LIGHTBOX ─── */

(function () {
  var lightbox = document.getElementById("lightbox");
  var lbImage = document.getElementById("lightbox-image");
  var lbVideo = document.getElementById("lightbox-video");
  var lbTitle = document.getElementById("lightbox-title");
  var lbCaption = document.getElementById("lightbox-caption");
  var lbCurrent = document.getElementById("lightbox-current");
  var lbTotal = document.getElementById("lightbox-total");
  var closeBtn = document.querySelector(".lightbox-close");
  var prevBtn = document.querySelector(".lightbox-prev");
  var nextBtn = document.querySelector(".lightbox-next");

  var visibleItems = [];
  var currentIndex = 0;

  function getVisibleItems() {
    return Array.from(document.querySelectorAll(".portfolio-item")).filter(
      function (item) { return item.style.display !== "none"; }
    );
  }

  function pauseVideo() {
    if (lbVideo) {
      lbVideo.pause();
      lbVideo.removeAttribute("src");
      lbVideo.load();
    }
  }

  function showItem(item) {
    var videoSrc = item.dataset.video;
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
    var item = visibleItems[currentIndex];
    showItem(item);
    lbCurrent.textContent = currentIndex + 1;
    lbTotal.textContent = visibleItems.length;
  }

  function navigate(direction) {
    pauseVideo();
    currentIndex =
      (currentIndex + direction + visibleItems.length) % visibleItems.length;
    updateLightbox();
  }

  /* Click handler for grid items */
  document.querySelectorAll(".portfolio-item").forEach(function (item) {
    item.addEventListener("click", function () {
      var visible = getVisibleItems();
      var idx = visible.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });
  });

  /* Exposed function for category-view carousel slides */
  window.openLightboxForGroup = function (groupItems, startIdx) {
    visibleItems = groupItems;
    currentIndex = startIdx;

    showItem(visibleItems[currentIndex]);
    lbCurrent.textContent = currentIndex + 1;
    lbTotal.textContent = visibleItems.length;

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", function () { navigate(-1); });
  nextBtn.addEventListener("click", function () { navigate(1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });
})();
