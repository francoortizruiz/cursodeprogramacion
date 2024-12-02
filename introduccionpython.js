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
})
