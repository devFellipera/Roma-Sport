let slideIndex = 1;
let slideInterval;

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slides img");
    let dots = document.querySelectorAll(".dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function moveSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    slideInterval = setInterval(() => showSlides(slideIndex += 1), 5000); // Muda a imagem a cada 5 segundos
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    slideInterval = setInterval(() => showSlides(slideIndex += 1), 5000); // Muda a imagem a cada 5 segundos
}

// Inicializa o carrossel
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
    slideInterval = setInterval(() => showSlides(slideIndex += 1), 5000); // Muda a imagem a cada 5 segundos
});

// Botão de rolar para o topo
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
