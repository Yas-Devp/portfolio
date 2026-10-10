document.getElementById('year').textContent = new Date().getFullYear();

// Light / dark toggle (dark is the default), saved in localStorage
const root = document.documentElement;
const btn = document.getElementById('themeBtn');

function render() {
  const dark = root.dataset.theme === 'dark';
  btn.textContent = dark ? 'Light mode' : 'Dark mode';
  btn.setAttribute('aria-pressed', String(!dark));
}
render();

btn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  render();
});
