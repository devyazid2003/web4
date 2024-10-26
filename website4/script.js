const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('show');
  sidebar.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = '#1976D2'; /* Darker Blue for scroll */
  } else {
    header.style.backgroundColor = '#2196F3'; /* Original Blue */
  }
});

const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
