if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    let previousScrollPosition = window.scrollY;

    // Función para aplicar animación
    const animateElement = (element, animationClass) => {
      element.classList.add('animate__animated', animationClass);
      element.classList.remove('invisible');
    };

    // Opciones del IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8
    };

    // Crear IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      const currentScrollPosition = window.scrollY;

      entries.forEach(entry => {
        const element = entry.target;

        if (entry.isIntersecting && currentScrollPosition > previousScrollPosition) {
          if (element.classList.contains('header')) {
            animateElement(element, 'animate__fadeInDown');
          } else if (element.classList.contains('nav-item')) {
            animateElement(element, 'animate__fadeInDown');
          } else if (element.classList.contains('title')) {
            animateElement(element, 'animate__fadeInDown');
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
        }
      });

      previousScrollPosition = currentScrollPosition;
    }, observerOptions);

    // Seleccionar los elementos y aplicar clase invisible
    const elementsToAnimate = document.querySelectorAll('.header, .nav-item, .title, .title2, .banner, .parrafo, .servicios, .parrafoSer, .carrousel, .footer');
    elementsToAnimate.forEach(element => {
      element.classList.add('invisible');

      // Revisar si el elemento está visible en el inicio y animarlo si es necesario
      if (element.getBoundingClientRect().top < window.innerHeight) {
        if (element.classList.contains('header')) {
          animateElement(element, 'animate__fadeInDown');
        } else if (element.classList.contains('nav-item')) {
          animateElement(element, 'animate__fadeInDown');
        } else if (element.classList.contains('title')) {
          animateElement(element, 'animate__fadeInDown');
        } else if (element.classList.contains('title2')) {
          animateElement(element, 'animate__fadeInDown');
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
        // Observar el elemento solo si no es visible al inicio
        observer.observe(element);
      }
    });
  });
}
