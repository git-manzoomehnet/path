let lastScrollY = window.scrollY;
let isInitialLoad = true;

const elements = document.querySelectorAll('.scrollTop');

const observer = new IntersectionObserver((entries, observer) => {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;

  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      if (isInitialLoad || isScrollingDown) {
        el.classList.add('visible', 'animate');

        // فقط یکبار اجرا بشه
        observer.unobserve(el);
      }
    }
  });

  lastScrollY = currentScrollY;
  isInitialLoad = false;
}, {
  threshold: 0.01
});

elements.forEach(el => observer.observe(el));
