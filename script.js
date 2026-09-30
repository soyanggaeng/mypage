/* Progressive enhancement: all content and resource links work without JS. */
(() => {
  "use strict";

  // The only photo used is the original 연경.jpg from the owner's repository.
  const photo = document.querySelector("img[data-profile-photo]");
  if (photo instanceof HTMLImageElement) {
    let retried = false;
    const fallbackLabel = photo.parentElement?.querySelector(".photo-fallback");
    const onPhotoError = () => {
      const fallback = photo.dataset.fallbackSrc;
      if (!retried && fallback && photo.src !== fallback) {
        retried = true;
        photo.src = fallback;
        return;
      }
      photo.hidden = true;
      if (fallbackLabel instanceof HTMLElement) fallbackLabel.hidden = false;
    };
    photo.addEventListener("error", onPhotoError);
    photo.addEventListener("load", () => {
      photo.hidden = false;
      if (fallbackLabel instanceof HTMLElement) fallbackLabel.hidden = true;
    });
    if (photo.complete && photo.naturalWidth === 0) onPhotoError();
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const header = document.querySelector(".site-header");
  if (!(toggle instanceof HTMLButtonElement) || !(nav instanceof HTMLElement)) return;
  const mobile = window.matchMedia("(max-width: 767px)");

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest("a") : null;
    if (!link || !mobile.matches) return;
    setMenu(false);
    const section = document.getElementById(link.hash.slice(1));
    if (section instanceof HTMLElement) {
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
      section.addEventListener("blur", () => section.removeAttribute("tabindex"), { once: true });
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobile.matches && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (mobile.matches && event.target instanceof Node && header instanceof HTMLElement && !header.contains(event.target)) setMenu(false);
  });
  const resetMenu = () => setMenu(false);
  if (typeof mobile.addEventListener === "function") mobile.addEventListener("change", resetMenu);
  else if (typeof mobile.addListener === "function") mobile.addListener(resetMenu);

  toggle.hidden = false;
  document.documentElement.classList.add("nav-enhanced");
})();
