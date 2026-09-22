(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("on");
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();