// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navBar = document.getElementById('nav-bar');

toggle.addEventListener('click', () => {
  const open = navBar.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Close menu after tapping a link
navBar.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});
