// Esperamos a que el DOM esté listo y luego aplicamos las animaciones al hacer scroll
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Definir los tiempos de animación
    const animationTimings = {
      header: 800,
      navItem: 100,
      title: 200,
      banner: 400,
      parrafo: 500,
      servicios: 400,
      parrafoSer: 500,
      carrousel: 500,
      footer: 800,
    };

    // Función para aplicar animaciones
    const animateElement = (element, animationClass) => {
      element.classList.add('animate__animated', animationClass);
      element.classList.remove('invisible'); // Hacer visible el elemento cuando inicie la animación
    };

    // Función para remover animaciones
    const removeAnimation = (element) => {
      element.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__fadeInUp', 'animate__fadeInLeft', 'animate__fadeInRight');
      element.classList.add('invisible'); // Hacerlo invisible nuevamente cuando la animación se termine
    };

    // Configuración del IntersectionObserver
    const observerOptions = {
      root: null, // Se usa el viewport como contenedor
      rootMargin: '0px',
      threshold: [0, 0.5], // Cuando el elemento entre o salga del 50% del viewport
    };

    // Crear el IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;

        if (entry.isIntersecting) {
          // Cuando el elemento es visible en el viewport, aplicamos la animación
          if (element.classList.contains('header')) {
            animateElement(element, 'animate__fadeInDown');
          } else if (element.classList.contains('nav-item')) {
            animateElement(element, 'animate__fadeInDown');
          } else if (element.classList.contains('title')) {
            animateElement(element, 'animate__fadeInLeft');
          } else if (element.classList.contains('title2')) {
            animateElement(element, 'animate__fadeInRight');
          } else if (element.classList.contains('banner')) {
            animateElement(element, 'animate__fadeInUp');
          } else if (element.classList.contains('parrafo')) {
            animateElement(element, 'animate__fadeInUp');
          } else if (element.classList.contains('servicios')) {
            animateElement(element, 'animate__fadeInUp');
          } else if (element.classList.contains('parrafoSer')) {
            animateElement(element, 'animate__fadeInUp');
          } else if (element.classList.contains('carrousel')) {
            animateElement(element, 'animate__fadeInUp');
          } else if (element.classList.contains('footer')) {
            animateElement(element, 'animate__fadeInUp');
          }
        } else {
          // Cuando el elemento ya no es visible, eliminamos la animación
          removeAnimation(element);
        }
      });
    }, observerOptions);

    // Seleccionar los elementos y observarlos
    const elementsToAnimate = document.querySelectorAll('header, .nav-item, .title, .title2, .banner, .parrafo, .servicios, .parrafoSer, .carrousel, .footer');

    elementsToAnimate.forEach(element => {
      // Agregar clase invisible al inicio
      element.classList.add('invisible');
      // Observar el elemento
      observer.observe(element);
    });
  });
}
