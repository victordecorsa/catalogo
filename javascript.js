document.addEventListener("DOMContentLoaded", function () {
    const totalSlides = 3; // Número de slides
    const maxImageIndex = 27; // Número total de imagens disponíveis
    const slides = document.querySelectorAll(".carousel-slide");
  
    function getRandomIndex() {
      return Math.floor(Math.random() * maxImageIndex) + 1;
    }
  
    function showSlide(index) {
      slides.forEach((slide) => {
        const randomIndex = getRandomIndex();
        slide.querySelector("img").src = `/imgs/${randomIndex}.jpg`;
        slide.style.display = "none";
      });
  
      slides[index].style.display = "block";
    }
  
    function nextSlide() {
      showSlide((getRandomIndex() % totalSlides));
    }
  
    function startCarousel() {
      setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos (3000 milissegundos)
    }
  
    showSlide(0);
    startCarousel();
  });
  