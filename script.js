// Carousel functionality
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

// Modal functionality
function showModal(skillTitle, skillDescription) {
    const modal = document.getElementById('skill-modal');
    const modalTitle = document.getElementById('modal-skill-title');
    const modalDescription = document.getElementById('modal-skill-description');

    modalTitle.textContent = skillTitle;
    modalDescription.textContent = skillDescription;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('skill-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('skill-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Typing animation for header title
const headerTitle = document.getElementById('header-title');
const text = headerTitle.textContent;
headerTitle.textContent = '';

for (let i = 0; i < text.length; i++) {
    setTimeout(function() {
        headerTitle.textContent += text.charAt(i);
    }, 150 * i);
}
