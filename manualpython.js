document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? '🌞' : '🌙';
        
        localStorage.setItem('theme', newTheme);
    }
    
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '🌞' : '🌙';
    
    themeToggle.addEventListener('click', toggleTheme);

    // Content animations
    const contentLinks = document.querySelectorAll('.content-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    contentLinks.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(link);
    });
});