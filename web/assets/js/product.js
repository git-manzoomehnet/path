var interleaveOffset, mainSlider, mainSliderOptions, mainSliderSelector, navSlider, navSliderOptions, navSliderSelector;

mainSliderSelector = '.main-slider';
mainSliderSelector = '.main-slider';

navSliderSelector = '.nav-slider';

interleaveOffset = 0.5;


mainSliderOptions = {
  // loop: true,
  loopAdditionalSlides: 10,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    //  loopAdditionalSlides: 10,
    grabCursor: true,
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
        // progress: function () {
          
        //     var i, innerOffset, innerTranslate, slideProgress, swiper;
        //     swiper = this;

        //     i = 0;
            
        //     while (i < swiper.slides.length) {
        //         slideProgress = swiper.slides[i].progress;
        //         innerOffset = swiper.width * interleaveOffset;
        //         innerTranslate = slideProgress * innerOffset;
        //         swiper.slides[i].querySelector('.slide-bgimg').style.transform = 'translate3d(' + innerTranslate + 'px, 0, 0)';
        //         i++;
        //     }
            
        // },
        
        progress: function () {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
              const slide = swiper.slides[i];
      
              // ❗ جلوگیری از اعمال افکت روی اسلایدهای کپی شده (loop duplicates)
              if (slide.classList.contains('swiper-slide-duplicate')) continue;
      
              const slideProgress = slide.progress;
              const innerOffset = swiper.width * interleaveOffset;
              const innerTranslate = slideProgress * innerOffset;
      
              const bg = slide.querySelector('.slide-bgimg');
              if (bg) bg.style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
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

const mainSliderr = document.querySelector('.main-slider') 
  ? new Swiper('.main-slider', mainSliderOptions) 
  : null;

const navSliderr = document.querySelector(navSliderSelector) 
  ? new Swiper(navSliderSelector, navSliderOptions) 
  : null;

if (mainSliderr && navSliderr) {
  mainSlider.controller.control = navSlider;
  navSlider.controller.control = mainSlider;
}


let scrollBtm = document.querySelector(".scrollBtm")
scrollBtm.addEventListener("click" , function (params) {

document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
})




let lastScrollY = window.scrollY;
let isInitialLoad = true;

const elements = document.querySelectorAll('.wipeScroll');

const observer = new IntersectionObserver((entries) => {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;

  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      if (isInitialLoad || isScrollingDown) {
        el.classList.add('activeScroll', 'animate');
        observer.unobserve(el); // ✅ فقط یکبار اجرا شود
      }
    }

    // نیازی به حذف کلاس نیست چون فقط یکبار اضافه میشه
  });

  lastScrollY = currentScrollY;
  isInitialLoad = false;
}, {
  threshold: 0.01
});

elements.forEach(el => observer.observe(el));






let galleryPop = document.querySelector(".galleryPop")
let closeSearchPop = document.querySelector(".closeSearchPop")
  const popGallery = new Swiper('.popGallery', {
 speed:1000,
   slidesPerView: 1,


  // Navigation arrows
  navigation: {
    nextEl: '.nextPopGallery',
    prevEl: '.prevPopGallery',
  },

});
let mainSliders = document.querySelectorAll(".main-slider .swiper-slide")
mainSliders.forEach((element,i) => {
    element.addEventListener("click" , function (params) {
        popGallery.slideTo(i,10)
        galleryPop.classList.remove("-translate-y-[100%]")
    })
});

closeSearchPop.addEventListener("click" , function (params) {
            galleryPop.classList.add("-translate-y-[100%]")

})







let lastScrollYTop = window.scrollY;
let isInitialLoadTop = true;

const elementsTop = document.querySelectorAll('.scrollTop');

const observerTop = new IntersectionObserver((entries) => {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollYTop;
  const isScrollingUp = currentScrollY < lastScrollYTop;

  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      // اگر در بارگذاری اولیه یا در هر جهتی از اسکرول باشیم
      if (isInitialLoadTop || isScrollingDown || isScrollingUp) {
        el.classList.add('visible', 'animate');
        observerTop.unobserve(el); // فقط یکبار اجرا شود
      }
    }
  });

  lastScrollYTop = currentScrollY;
  isInitialLoadTop = false;
}, {
  threshold: 0.01
});

elementsTop.forEach(el => observerTop.observe(el));



  window.addEventListener("load", function () {
        const slider = document.getElementById("mainSlider");
        const text = document.getElementById("textContent");

        if (slider && text) {
            const sliderHeight = slider.offsetHeight;
            text.style.maxHeight = sliderHeight + "px";
        }
    });