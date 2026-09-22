(() => {
  "use strict";

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const button = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");

  if (button && mobileNav) {
    button.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      button.textContent = open ? "Close" : "Menu";
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
        button.textContent = "Menu";
      });
    });
  }
})();