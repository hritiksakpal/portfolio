(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const navLinks = [...document.querySelectorAll('.topbar nav a')];
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  const syncNav = () => {
    const y = window.scrollY + 120;
    let active = sections[0];
    sections.forEach(section => { if (section.offsetTop <= y) active = section; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active.id));
  };
  window.addEventListener('scroll', syncNav, {passive:true});
  syncNav();
})();