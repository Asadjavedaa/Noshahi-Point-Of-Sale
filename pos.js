document.addEventListener('DOMContentLoaded', function() {
    // --- Simple Scroll-to-Top Button Functionality ---
    const scrollButton = document.createElement('button');
    scrollButton.textContent = '↑';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5em;
        display: none; /* Initially hidden */
        z-index: 1000;
    `;
    document.body.appendChild(scrollButton);

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Optional: Basic logging for blog card clicks (for tracking/analytics) ---
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.blog-title').textContent;
            console.log(`Blog post clicked: "${title}"`);
            // In a real application, you would navigate to the blog post URL here
            // window.location.href = '/blog/' + encodeURIComponent(title.toLowerCase().replace(/ /g, '-'));
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // Toggle the visibility and state of the navigation
            mainNav.classList.toggle('is-open');

            // Optional: Change icon (e.g., from bars to X)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('is-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});