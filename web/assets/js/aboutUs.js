$(".containerHorizontal").imagesLoaded({

}, function () {
    $(document).ready(function () {
        const img = document.getElementById("myImage");
        const text = document.getElementById("myText");
        const widthImg = img?.offsetWidth;

        text.style.width = `${widthImg}px`;
       
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

            let scrollTween = gsap.to(pinWrap, {
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






            // CUSTOM JS

            let wipeScroll = document.querySelectorAll(".wipeScroll");


          wipeScroll.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'left 80%',
            end: 'left left',
            containerAnimation: scrollTween,
            // markers: true,
            onEnter: () => {
                element.classList.add("activeScroll");
            },
        },
        stagger: 0.1,
        delay: 0,
        duration: 1,
    });

    // بررسی اولیه برای اسکرول افقی
    const rect = element.getBoundingClientRect();
    const isInHorizontalView = rect.left < window.innerWidth && rect.right > 0;

    if (isInHorizontalView) {
        element.classList.add("activeScroll");
    }
});

            let member = document.querySelectorAll(".member")
            member.forEach(element => {
                gsap.from(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: 'left 80%',
                        end: 'left left',
                        containerAnimation: scrollTween,
                        // markers: true,
                        onEnter: () => {
                            
                        element.classList.add("activeMemebr")
                         

                        },
                    },

                    stagger: 0.1,
                    delay: 0,
                    duration: 1,



                })
            });


        }, 500);
    })

})