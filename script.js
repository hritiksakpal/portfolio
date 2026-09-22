(() => {
  "use strict";
  document.documentElement.classList.add("js");

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const scrollLine = document.getElementById("scrollLine");
  const setProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (scrollLine) scrollLine.style.width = value + "%";
  };
  window.addEventListener("scroll", setProgress, {passive:true});
  setProgress();

  const nav = document.getElementById("nav");
  const menuButton = document.getElementById("menuButton");
  if (nav && menuButton) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.textContent = open ? "Close" : "Menu";
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "Menu";
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(el => el.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.1});

  revealItems.forEach(el => observer.observe(el));
})();