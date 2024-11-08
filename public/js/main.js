let currentPage = 0;
const totalCards = document.querySelectorAll('.card').length;
const cardsPerPage = 4;
const carouselWrapper = document.querySelector('.carousel-wrapper');
const paginationButtons = document.querySelectorAll('.pagination-button');

// Función para cambiar de página
function changePage(page) {
  currentPage = page;
  const offset = page * cardsPerPage;

  // Mueve el carrusel al lugar adecuado
  carouselWrapper.style.transform = `translateX(-${offset * 220 / totalCards}%)`;

  // Actualiza la paginación activa
  paginationButtons.forEach(button => button.classList.remove('active'));
  paginationButtons[page].classList.add('active');
}

// Inicializa el carrusel
changePage(0);

// Obtener el año actual
const currentYear = new Date().getFullYear();
    
    // Colocar el año actual en el elemento con id "year"
    document.getElementById('año').textContent = currentYear;