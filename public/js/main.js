 // Obtener el año actual
 const currentYear = new Date().getFullYear();

 // Colocar el año actual en el elemento con id "year"
 document.getElementById("año").textContent = currentYear;
 
let currentPage = 0;
const totalCards = document.querySelectorAll('.card').length;
const cardsPerPage = 2;
const carouselWrapper = document.querySelector('.carousel-wrapper');
const paginationButtons = document.querySelectorAll('.pagination-button');

// Función para cambiar de página
function changePage(page) {
  currentPage = page;
  const offset = page * cardsPerPage;

  // Mueve el carrusel al lugar adecuado
  carouselWrapper.style.transform = `translateX(-${offset * 100 / totalCards}%)`;

  // Actualiza la paginación activa
  paginationButtons.forEach(button => button.classList.remove('active'));
  paginationButtons[page].classList.add('active');
}

// Inicializa el carrusel
changePage(0);

// carrousel financiacion
// Carrusel 2
let currentPage2 = 0;
const totalCards2 = document.querySelectorAll('.carousel2 .card').length;
const cardsPerPage2 = 8;
const carouselWrapper2 = document.querySelector('.carousel2 .carousel-wrapper');
const paginationButtons2 = document.querySelectorAll('.carousel2 .pagination-button');

function changePage2(page) {
  currentPage2 = page;
  const offset2 = page * cardsPerPage2;

  carouselWrapper2.style.transform = `translateX(-${(offset2 * 100) / totalCards2}%)`;

  paginationButtons2.forEach(button => button.classList.remove('active'));
  paginationButtons2[page].classList.add('active');
}

changePage2(0);


 