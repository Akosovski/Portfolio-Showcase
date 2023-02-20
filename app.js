
var swiper = new Swiper(".mySwiperEducation", {
    slidesPerView: "auto",
    slideToScroll: 1,
    spaceBetween: 30,
    speed: 450,
    loop: false,
    mousewheel: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1100: {
            spaceBetween: 0,
            slidesPerView: 3,
            direction: "vertical",
        }
    },
});

var swiper = new Swiper(".mySwiperExperience", {
    slidesPerView: "auto",
    slideToScroll: 1,
    spaceBetween: 30,
    speed: 450,
    loop: false,
    mousewheel: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1100: {
            spaceBetween: 0,
            slidesPerView: 3,
            direction: "vertical",
        }
    },
});

// Reveal Animation
function revealFunction() {
    window.sr = ScrollReveal({ distance: '100%', easing: 'ease-out', reset: true });
    sr.reveal('.js-reveal-0', { duration: 500 });
    sr.reveal('.js-reveal-1', { duration: 600 });
    sr.reveal('.js-reveal-2', { duration: 700 });
    sr.reveal('.js-reveal-3', { duration: 800 });
    sr.reveal('.js-reveal-4', { duration: 900 });
    sr.reveal('.js-reveal-5', { duration: 1000 });
    sr.reveal('.js-reveal-6', { duration: 1100 });
    sr.reveal('.js-reveal-7', { duration: 1200 });
    sr.reveal('.js-reveal-8', { duration: 1300 });
    sr.reveal('.js-reveal-9', { duration: 1400 });
}
revealFunction();

var open = false;

function handleProjectsCards(btn) {

    const details = document.querySelectorAll('.portfolio-section .backdrop');
    open = !open;

    if (open) {

        details.forEach(element => {

            if (element.classList.contains(btn.getAttribute('data-project-ref'))) {

                element.classList.add('backdrop-open');

                var content = element.querySelector('.content');

                setTimeout(() => {

                    content.classList.add('content-showing');
                }, 800);
            }
        });
    } else {

        details.forEach(element => {

            if (element.classList.contains(btn.getAttribute('data-project-ref'))) {

                var content = element.querySelector('.content');

                content.classList.remove('content-showing');
                element.classList.remove('backdrop-open');
            }
        });
    }
}