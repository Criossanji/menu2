// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Interactive image click (optional)
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.menu-item img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('enlarged');
        });
    });
});