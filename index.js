document.addEventListener('DOMContentLoaded', () => {
    // Simple script for drop-down menu hover/click (optional)
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        // Only target links with a dropdown indicator (the caret icon)
        if (link.querySelector('.fa-caret-down')) {
            link.addEventListener('click', (e) => {
                // Prevent default navigation for demonstration
                e.preventDefault();
                alert(`You clicked on a dropdown menu: ${link.textContent.trim().split(' ')[0]}. In a real site, this would show a submenu.`);
            });
            // You can also add hover effects in CSS for desktop
        }
    });

    // Add a simple effect for the CTA buttons
    const ctaButtons = document.querySelectorAll('.hero-buttons button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`${button.textContent.trim()} button clicked.`);
        });
    });

    // Simple scroll animation for smooth navigation (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId !== '#') {
                 document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});