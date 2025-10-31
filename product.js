document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Close icon
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parentItem = question.closest('.faq-item');
            const answer = parentItem.querySelector('.faq-answer');

            // Close all other open answers
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== parentItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null; 
                }
            });

            // Toggle the clicked answer
            parentItem.classList.toggle('active');
            if (parentItem.classList.contains('active')) {
                // Use scrollHeight for dynamic height of the answer content
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null; 
            }
        });
    });

    // Initialize the active FAQ item (Q1)
    const initialActive = document.querySelector('.faq-item.active .faq-answer');
    if (initialActive) {
        initialActive.style.maxHeight = initialActive.scrollHeight + "px";
    }
});