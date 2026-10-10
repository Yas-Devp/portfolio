// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Hero: the "ドン!" hit shakes the page once, right when the title lands
if (!reduceMotion) {
  const splash = document.getElementById('p1');
  setTimeout(() => {
    splash.classList.add('shake');
    splash.addEventListener('animationend', () => splash.classList.remove('shake'), { once: true });
  }, 450);
}

// Panels get "cut in" once, the first time they scroll into view
if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js');
  const panels = document.querySelectorAll('.panel');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('cut');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  panels.forEach((p) => io.observe(p));
}
