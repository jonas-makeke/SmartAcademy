const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');

if (burgerBtn && mainNav) {
  burgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('nav--open');
  });

  mainNav.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => mainNav.classList.remove('nav--open')),
  );
}

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

const statEls = document.querySelectorAll('.stat__number');

function animateStats() {
  statEls.forEach((el) => {
    const target = Number(el.getAttribute('data-target') || '0');
    let current = 0;
    const duration = 900;
    const start = performance.now();

    function step(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(target * eased);
      el.textContent = current.toString();
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  });
}

window.addEventListener('load', animateStats);

function scrollToSection(id) {
  const target = document.querySelector(id);
  if (!target) return;
  window.scrollTo({
    top: target.offsetTop - 70,
    behavior: 'smooth',
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth',
    });
  });
});

// ---------- Thème clair / sombre ----------
const THEME_KEY = 'smartacademy-theme';
const themeToggleBtn = document.getElementById('themeToggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
  }
}

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

