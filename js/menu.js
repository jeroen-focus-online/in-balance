const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#hoofdnavigatie');
button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && button?.getAttribute('aria-expanded') === 'true') {
    button.click();
    button.focus();
  }
});
