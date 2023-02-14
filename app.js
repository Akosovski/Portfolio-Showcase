
// initializing the carousel slider for the educational part
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

// initializing the carousel slider for the experience part
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

//creating the scrollreveal function for the effects to fade on the scroll
function revealFunction() {
    window.sr = ScrollReveal({ distance: '100%', easing: 'ease-out', reset: true });
    sr.reveal('.js-reveal-0', { duration: 900 });
    sr.reveal('.js-reveal-1', { duration: 1000 });
    sr.reveal('.js-reveal-2', { duration: 1200 });
    sr.reveal('.js-reveal-3', { duration: 1400 });
}
revealFunction();

//function to open the details of portfolio cases

// 'open' is the details backdrop state (closed)
var open = false;

//clicking on the "open" card button...
function handleProjectsCards(btn) {

    //get the details of all cases
    const details = document.querySelectorAll('.portfolio-section .backdrop');

    //switch the state
    open = !open;

    if (open) {

        details.forEach(element => {

            //search the details of the specific card that was clicked on, based on the attribute
            if (element.classList.contains(btn.getAttribute('data-project-ref'))) {

                //open de details
                element.classList.add('backdrop-open');

                var content = element.querySelector('.content');

                setTimeout(() => {

                    //adjusts opacity
                    content.classList.add('content-showing');
                }, 800);
            }
        });
    } else {

        //if it is to close the details, the same thing but now removing the classes

        details.forEach(element => {

            if (element.classList.contains(btn.getAttribute('data-project-ref'))) {

                var content = element.querySelector('.content');

                content.classList.remove('content-showing');
                element.classList.remove('backdrop-open');
            }
        });
    }
}