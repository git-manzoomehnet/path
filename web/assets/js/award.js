var interleaveOffset, mainSlider, mainSliderOptions, mainSliderSelector, navSlider, navSliderOptions, navSliderSelector;

mainSliderSelector = '.main-slider';
mainSliderSelector = '.main-slider';

navSliderSelector = '.nav-slider';

interleaveOffset = 0.5;


mainSliderOptions = {
    //  loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    //  loopAdditionalSlides: 10,
    // grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.nextMain',
        prevEl: '.prevMain'
    },
    on: {
        init: function () {
            this.autoplay.stop();
        },
        imagesReady: function () {
            this.el.classList.remove('loading');
            this.autoplay.start();
        },
        slideChangeTransitionEnd: function () {
            var captions, i, swiper;
            swiper = this;
            captions = swiper.el.querySelectorAll('.caption');
            i = 0;
            while (i < captions.length) {
                captions[i].classList.remove('show');
                ++i;
            }
            swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function () {
            var i, innerOffset, innerTranslate, slideProgress, swiper;
            swiper = this;
            i = 0;
            while (i < swiper.slides.length) {
                slideProgress = swiper.slides[i].progress;
                innerOffset = swiper.width * interleaveOffset;
                innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector('.slide-bgimg').style.transform = 'translate3d(' + innerTranslate + 'px, 0, 0)';
                i++;
            }
        },
        touchStart: function () {
            var i, swiper;
            swiper = this;
            i = 0;
            while (i < swiper.slides.length) {
                swiper.slides[i].style.transition = '';
                i++;
            }
        },
        setTransition: function (speed) {
            var i, swiper;
            swiper = this;
            i = 0;
            while (i < swiper.slides.length) {
                swiper.slides[i].style.transition = speed + 'ms';
                swiper.slides[i].querySelector('.slide-bgimg').style.transition = speed + 'ms';
                i++;
            }
        }
    }
};

mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

navSliderOptions = {
    //  loop: true,
    //  loopAdditionalSlides: 10,
    speed: 1000,
    spaceBetween: 15,
    slidesPerView: 5,
    centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    // direction: 'vertical',
    on: {
        imagesReady: function () {
            this.el.classList.remove('loading');
        },
        click: function () {
            mainSlider.autoplay.stop();
        }
    }
};

navSlider = new Swiper(navSliderSelector, navSliderOptions);

// matching sliders
mainSlider.controller.control = navSlider;

navSlider.controller.control = mainSlider;

let scrollBtm = document.querySelector(".scrollBtm")
scrollBtm.addEventListener("click" , function (params) {

document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
})