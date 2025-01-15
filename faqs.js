// Function to update visibility of FAQ sections based on selected radio button
function updateFAQVisibility() {
    const selectedRadio = document.querySelector('.radio input[type="radio"]:checked');
    const selectedIdSuffix = selectedRadio.id.split('-')[1]; // Extracts 'courses', 'admission', etc.
    const faqSections = document.querySelectorAll('#faq-container > div');

    // Loop through sections and show only the relevant one
    faqSections.forEach(section => {
        if (section.id === `F-${selectedIdSuffix.substring(0, 4)}`) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Add event listeners to radio buttons to update visibility on change
document.querySelectorAll('.radio input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateFAQVisibility);
});

// Ensure the correct section is visible on page load
window.addEventListener('DOMContentLoaded', updateFAQVisibility);

// FAQ Toggle Functionality for expanding/collapsing individual FAQ items
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Close any other open FAQ and reset their icons
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                const icon = otherItem.querySelector('.faq-icon');
                if (icon) icon.textContent = '+'; // Reset icon to '+'
            }
        });

        // Toggle the clicked FAQ
        item.classList.toggle('active');

        // Update the icon of the clicked FAQ
        const icon = item.querySelector('.faq-icon');
        if (icon) {
            icon.textContent = item.classList.contains('active') ? '−' : '+';
        }
    });
});