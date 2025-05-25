let lastScrollY = window.scrollY;
let isInitialLoad = true;

const elements = document.querySelectorAll('.wipeScroll');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('activeScroll', 'animate');
            observer.unobserve(el); // فقط یکبار افکت اجرا بشه
        }
    });
}, {
    threshold: 0.01
});

// همه عناصر رو تحت نظر بگیریم
elements.forEach(el => observer.observe(el));



let galleryPop = document.querySelector(".galleryPop")
let closeSearchPop = document.querySelector(".closeSearchPop")
const popGallery = new Swiper('.popGallery', {
    speed: 1000,
    slidesPerView: 1,


    // Navigation arrows
    navigation: {
        nextEl: '.nextPopGallery',
        prevEl: '.prevPopGallery',
    },

});
let mainSliders = document.querySelectorAll(".members .imgS img")
mainSliders.forEach((element, i) => {
    element.addEventListener("click", function (params) {
        popGallery.slideTo(i, 10)
        galleryPop.classList.remove("-translate-y-[100%]")
    })
});

closeSearchPop.addEventListener("click", function (params) {
    galleryPop.classList.add("-translate-y-[100%]")

})


let scrollBtm = document.querySelector(".scrollBtm")
scrollBtm.addEventListener("click" , function (params) {

document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
})
