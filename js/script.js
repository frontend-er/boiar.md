//=======================Slider===================================================================================\


if (document.querySelector('.mainslider')) {
    let abutPageSwiper = new Swiper(".about-page__body", {


        //},
        observer: true,
        observerParents: true,
        sliderPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,




        navigation: {
            nextEl: '.about-page__arrow-prev',
            prevEl: '.about-page__arrow-next',
        },



        on: {
            lazyImageReady: function () {
                ibg();
            },
        }

    });

}

if (document.querySelector('.secondSlider')) {
    let workingSwiper = new Swiper(".working-page__slider", {


        //},
        observerParents: true,
        sliderPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,




        navigation: {
            nextEl: '.working-page__prev',
            prevEl: '.working-page__next',
        },



        on: {
            lazyImageReady: function () {
                ibg();
            },
        }

    });
}

if (document.querySelector('.thirdslider')) {

    let doneSwiper = new Swiper(".done-page__slider", {


        //},
        observer: true,
        observerParents: true,
        sliderPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,


        pagination: {
            el: '.swiper-pagination',
        },

        on: {
            lazyImageReady: function () {
                ibg();
            },
        }

    });

}

if (document.querySelector('.lastslider')) {

    let doneSwiper = new Swiper(".workers-page__slider", {


        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            clickable: true,
        },
        autoHeight: true,
        speed: 800,
        navigation: {
            nextEl: '.workers-page__next',
            prevEl: '.workers-page__prev',
          },



        on: {
            lazyImageReady: function () {
                ibg();
            },
        }

    });

}

