document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const navbarMenu = document.getElementById('navbar-default');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('hidden');
        const isExpanded = navbarMenu.classList.contains('hidden') ? 'false' : 'true';
        toggleButton.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking a link (mobile UX)
    const navLinks = navbarMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!navbarMenu.classList.contains('hidden')) {
                navbarMenu.classList.add('hidden');
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
});