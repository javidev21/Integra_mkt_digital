const btnMenu = document.getElementById('menu');
const iconHambur = document.getElementById('hambur');
const iconX = document.getElementById('close');
const menuAbierto = document.querySelector('.navbar-collapse.collapse.show');
const menuCerrado = document.querySelector('.navbar-collapse.collapse');
const navLink = document.querySelectorAll('.nav-link');

let bool = false;

btnMenu.addEventListener('click', () => {
    if (bool) {
        // console.log('menu cerrado');
        bool = false;
        iconX.classList.remove('d-block');
        iconX.classList.add('d-none');
        iconHambur.classList.remove('d-none');
        iconHambur.classList.add('d-block');
    } else {
        // console.log('menu abierto');
        bool = true;
        iconHambur.classList.remove('d-block');
        iconHambur.classList.add('d-none');
        iconX.classList.remove('d-none');
        iconX.classList.add('d-block');
    }
})


const menuHambur = () => {
    if (bool) {
        // console.log('menu cerrado');
        bool = false;
        iconX.classList.remove('d-block');
        iconX.classList.add('d-none');
        iconHambur.classList.remove('d-none');
        iconHambur.classList.add('d-block');
    } else {
        // console.log('menu abierto');
        bool = true;
        iconHambur.classList.remove('d-block');
        iconHambur.classList.add('d-none');
        iconX.classList.remove('d-none');
        iconX.classList.add('d-block');
    }
}

navLink.forEach(n => n.addEventListener('click', menuHambur));



// Qué hace este código? Cuando apreto en una opción del menú (home, about, etc) el menú se cierra solo.
const linkAction = () => {
    const navMenu = document.getElementById('collapsibleNavId');
    // Cuando hacemos clic en cada enlace de navegación, eliminamos la clase show-menu
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== CUANDO DOY CLICK FUERA DEL MENÚ, ÉSTE SE CIERRA =====*/
// document.addEventListener('click', (e) => {
//     const menuAbierto = document.querySelector('.navbar-collapse.collapse.show');
//     if (!menuAbierto.contains(e.target)) {
//         menuAbierto.classList.remove('show');
//     }
// });
const year = document.getElementById('year').textContent = new Date().getFullYear();

/* Carrousel */
let swiperTestimonial = new Swiper(".testimonios", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
    }
  });