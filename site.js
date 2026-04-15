function getNav(activePage) {
  const pages = [
    ['Home', 'index.html'],
    ['People', 'people.html'],
    ['Research', 'research.html'],
    ['Extension', 'extension.html'],
    ['Teaching', 'teaching.html'],
    ['News', 'news.html'],
    ['Gallery', 'gallery.html'],
    ['Contact', 'contact.html'],
  ];
  const menuItems = pages.map(([label, href]) =>
    `<li><a href="${href}" class="${activePage === label ? 'active' : ''}">${label}</a></li>`
  ).join('');
  return `
  <nav class="site-nav" id="siteNav">
    <div class="nav-wrap">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-text">
          <span class="lab">Zhou Research Group</span>
          <span class="uni">Louisiana State University</span>
        </div>
      </a>
      <ul class="nav-menu" id="navMenu">${menuItems}</ul>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>`;
}
function getFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-lsu-mark">LSU</span>
        <span class="footer-copy">&copy; 2026 Congliang Zhou Research Group &middot; Louisiana State University</span>
      </div>
      <div class="footer-links">
        <a href="https://www.lsu.edu/" target="_blank">LSU</a>
        <a href="https://www.lsuagcenter.com/" target="_blank">AgCenter</a>
        <a href="https://www.lsu.edu/accessibility" target="_blank">Accessibility</a>
      </div>
    </div>
  </footer>`;
}
document.addEventListener('DOMContentLoaded', () => {
  const active = document.body.dataset.page || '';
  document.body.insertAdjacentHTML('afterbegin', getNav(active));
  document.body.insertAdjacentHTML('beforeend', getFooter());
  const nav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('open');
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
