(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav a").forEach(item => item.classList.remove("active"));
      const target = [...document.querySelectorAll(".nav a")].find(item => item.getAttribute("href") === link.getAttribute("href"));
      if (target) target.classList.add("active");
    });
  });
})();