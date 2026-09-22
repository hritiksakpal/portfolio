(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const progress = document.querySelector("#progress");
  const updateProgress = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = value + "%";
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const header = document.querySelector(".header");
  const menu = document.querySelector("#menu");
  if (header && menu) {
    menu.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      menu.textContent = open ? "Close" : "Menu";
      menu.setAttribute("aria-expanded", String(open));
    });

    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("open");
        menu.textContent = "Menu";
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
})();
