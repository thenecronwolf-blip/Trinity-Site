document.addEventListener('DOMContentLoaded', () => {
    // ==============================
    // Card expand on click/focus
    // ==============================
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const expanded = card.getAttribute('aria-expanded') === 'true';
            card.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        });
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // ==============================
    // Dark Mode Toggle
    // ==============================
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';

        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // ==============================
    // Form submit placeholder
    // ==============================
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent. We will get back to you shortly.');
            form.reset();
        });
    }

    // ==============================
    // Optional fade-in observer
    // ==============================
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    fadeEls.forEach(el => observer.observe(el));

    // ==============================
    // Respect reduced motion
    // ==============================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        fadeEls.forEach(el => el.style.animation = 'none');
    }
});