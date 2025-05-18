$(".containerHorizontal").imagesLoaded({

}, function () {
    $(document).ready(function () {

    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);

      const pageContainer = document.querySelector('.containerHorizontal');

      const scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true,
        direction: 'vertical', // اسکرول افقی با GSAP هست، نه Locomotive
      });

      scroller.on('scroll', ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: pageContainer.style.transform ? 'transform' : 'fixed'
      });

      ScrollTrigger.addEventListener('refresh', () => scroller.update());

      let pinWrap = document.querySelector('.Pin-Wrapp');
      let scrollLength = pinWrap.scrollWidth - window.innerWidth;

     let scrollTween =  gsap.to(pinWrap, {
        x: -scrollLength, // حرکت از راست به چپ
        ease: 'none',
        scrollTrigger: {
          trigger: '#PinSection',
          scroller: pageContainer,
          start: 'top top',
          end: () => `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      ScrollTrigger.refresh();


      // Custom js

let catid = document.querySelector(".catid").innerHTML
    
let catlist = document.querySelectorAll(".catlist")
catlist.forEach(element => {
  let dataCatid = element.getAttribute("data-catid")
  if (dataCatid==catid) {
    element.classList.add("activeCat")
  }
});

    }, 500);
})

})