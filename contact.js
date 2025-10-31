document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Basic form validation (checking for required fields)
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        if (name && phone && email) {
            // In a real application, you would send this data to a server here (e.g., using fetch API)

            console.log('Form Data:', {
                name: name,
                phone: phone,
                email: email,
                storeName: document.getElementById('storeName').value,
                questions: document.getElementById('questions').value
            });

            // Show a success message to the user
            alert('Thank you for contacting Hulm Solutions! Your message has been sent.');

            // Clear the form
            form.reset();
        } else {
            alert('Please fill out all required fields marked with *.');
        }
    });
});