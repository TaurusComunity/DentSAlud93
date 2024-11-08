// Esperamos a que el DOM esté listo y luego aplicamos las animaciones en secuencia
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      // Definir el tiempo de cada paso
      const animationTimings = {
        header: 800,
        navItem: 100, 
        title: 200,  
        banner: 400,
        parrafo: 500,
        servicios: 400 ,
        parrafoSer: 500 ,
        carrousel: 500,

      };

      // Animar el header
      const header = document.querySelector('header');
      header.classList.add('animate__animated', 'animate__fadeInDown');
      header.classList.remove('invisible'); // Hacer visible cuando inicie la animación

      // Animar navegacion
      setTimeout(() => {
        const navItems = document.querySelectorAll('.nav-item');
        
        // Animar cada item del menú de navegación con un retraso
        navItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate__animated', 'animate__fadeInDown');
            item.classList.remove('invisible'); // Hacer visible cuando inicie la animación
          }, index * animationTimings.navItem);
        });

        // Animar titulo
        setTimeout(() => {
          const title = document.querySelector('.title');
          title.classList.add('animate__animated', 'animate__fadeInLeft');
          title.classList.remove('invisible'); // Hacer visible cuando inicie la animación
        }, navItems.length * animationTimings.navItem);

        setTimeout(() => {
          const title2 = document.querySelector('.title2');
          title2.classList.add('animate__animated', 'animate__fadeInRight');
          title2.classList.remove('invisible'); // Hacer visible cuando inicie la animación
        }, navItems.length * animationTimings.navItem + animationTimings.title);

        // Animar banner
        setTimeout(() => {
            const banner = document.querySelector('.banner');
            banner.classList.add('animate__animated', 'animate__fadeInUp');
            banner.classList.remove('invisible'); // Hacer visible cuando inicie la animación
          }, navItems.length * animationTimings.navItem + animationTimings.title);

        // Animar parrafo
        setTimeout(() => {
          const parrafo = document.querySelector('.parrafo');
          parrafo.classList.add('animate__animated', 'animate__fadeInUp');
          parrafo.classList.remove('invisible'); // Hacer visible cuando inicie la animación
        }, navItems.length * animationTimings.navItem + animationTimings.title);

        // Animar servicios
        setTimeout(() => {
          const servicios = document.querySelector('.servicios');
          servicios.classList.add('animate__animated', 'animate__fadeInUp');
          servicios.classList.remove('invisible'); // Hacer visible cuando inicie la animación
        }, navItems.length * animationTimings.navItem + animationTimings.title);

      // Animar parrafo servicios
      setTimeout(() => {
        const parrafoSer = document.querySelector('.parrafoSer');
        parrafoSer.classList.add('animate__animated', 'animate__fadeInUp');
        parrafoSer.classList.remove('invisible'); // Hacer visible cuando inicie la animación
      }, navItems.length * animationTimings.navItem + animationTimings.title);

        // Animar carrousel
        setTimeout(() => {
          const carrousel = document.querySelector('.carrousel');
          carrousel.classList.add('animate__animated', 'animate__fadeInUp');
          carrousel.classList.remove('invisible'); // Hacer visible cuando inicie la animación
        }, navItems.length * animationTimings.navItem + animationTimings.title);

      }, animationTimings.header);
    });
  }
  