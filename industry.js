document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');

            // Check if the clicked item is already open
            const isCurrentlyOpen = faqItem.classList.contains('open');

            // Close all other open FAQ items
            document.querySelectorAll('.faq-item.open').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('open');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            
            // Toggle the clicked item
            if (!isCurrentlyOpen) {
                // Open the item
                faqItem.classList.add('open');
                // Set the max-height to the answer's scroll height to allow the CSS transition
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                // Close the item
                faqItem.classList.remove('open');
                answer.style.maxHeight = null;
            }
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