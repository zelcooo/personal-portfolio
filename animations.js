const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggle.classList.remove('fa-moon');
    toggle.classList.add('fa-sun');
  } else {
    toggle.classList.remove('fa-sun');
    toggle.classList.add('fa-moon');
  }
});