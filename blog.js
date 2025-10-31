document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and ready for interaction.');

    // Example: Add a click handler for the 'Read More' button
    const readMoreButtons = document.querySelectorAll('.btn-read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const caseStudyTitle = e.target.closest('.text-content').querySelector('h2').textContent;
            
            // In a real application, you would navigate to a specific case study page:
            // window.location.href = `/case-studies/${caseStudyTitle.toLowerCase().replace(/\s/g, '-')}`;
            
            // For this example, just log it.
            console.log(`Clicked Read More for: ${caseStudyTitle}`);
            alert(`Redirecting to the full case study for: ${caseStudyTitle}`);
        });
    });

    // You could also use JS to implement a mobile navigation toggle 
    // if a main navigation bar were present.
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