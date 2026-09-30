const navButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navButton && nav) {
  navButton.addEventListener('click', () => {
    const open = navButton.getAttribute('aria-expanded') === 'true';
    navButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
}
