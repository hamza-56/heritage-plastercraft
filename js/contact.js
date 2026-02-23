/* ─── CONTACT FORM ─── */

(function () {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    /* Collect form data */
    const data = new FormData(form);
    const entries = Object.fromEntries(data.entries());

    /*
     * TODO: Replace with real form submission.
     * Options:
     *   - Formspree (https://formspree.io)
     *   - Netlify Forms
     *   - Custom backend endpoint
     *
     * Example with Formspree:
     *   form.action = "https://formspree.io/f/YOUR_FORM_ID";
     *   form.method = "POST";
     *   form.submit();
     */

    /* For now, show success message */
    form.style.display = "none";
    successMsg.classList.add("visible");
  });
})();
