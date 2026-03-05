document.getElementById("footer-year").textContent = new Date().getFullYear();

/* ─── WhatsApp FAB ─── */
(function () {
  const a = document.createElement("a");
  a.className = "whatsapp-fab";
  a.href = "https://wa.me/447946083027";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", "Chat on WhatsApp");
  a.innerHTML =
    '<svg viewBox="0 0 32 32" fill="#fff"><path d="M16.004 2.002c-7.731 0-14.002 6.271-14.002 14.002 0 2.468.657 4.876 1.904 6.988L2 30l7.189-1.884A13.94 13.94 0 0 0 16.004 30c7.731 0 14.002-6.271 14.002-14.002S23.735 2.002 16.004 2.002zm0 25.6a11.56 11.56 0 0 1-5.9-1.617l-.424-.251-4.262 1.117 1.138-4.153-.276-.439a11.56 11.56 0 0 1-1.775-6.155c0-6.393 5.204-11.597 11.597-11.597S27.6 9.711 27.6 16.104 22.397 27.602 16.004 27.602zm6.352-8.678c-.348-.174-2.06-1.017-2.38-1.133-.32-.116-.553-.174-.786.174s-.902 1.133-1.106 1.365c-.203.232-.406.261-.754.087s-1.47-.541-2.8-1.727c-1.035-.922-1.733-2.062-1.937-2.41s-.022-.536.152-.71c.156-.156.348-.406.522-.609s.232-.348.348-.58c.116-.232.058-.435-.029-.609s-.786-1.894-1.077-2.594c-.284-.68-.572-.588-.786-.599l-.67-.012c-.232 0-.609.087-.928.435s-1.219 1.191-1.219 2.905 1.248 3.37 1.422 3.602c.174.232 2.455 3.749 5.95 5.258.831.358 1.48.572 1.986.733.835.265 1.594.228 2.195.138.67-.1 2.06-.842 2.35-1.656.29-.813.29-1.51.203-1.656-.087-.145-.32-.232-.67-.406z"/></svg>';
  document.body.appendChild(a);
})();

/* ─── Scroll-to-top button ─── */
(function () {
  const btn = document.createElement("button");
  btn.className = "scroll-top";
  btn.setAttribute("aria-label", "Scroll to top");
  btn.innerHTML =
    '<svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>';
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
