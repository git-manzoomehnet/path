let awardBox = document.querySelectorAll(".awardBox")

awardBox.forEach((element,i) => {
    let idMember = element.getAttribute("data-id")
    let idImage = element.getAttribute("data-img")
    let idImageList = element.getAttribute("data-imgList")
    fetch(`/load-awards.inc?id=${idMember}&img=${idImage}&imgList=${idImageList}&lid=2`)
    .then(response => response.text())
  
    .then(userData => {

      element.innerHTML=userData
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });


  
const relatedProject = new Swiper('.relatedProject', {
    // Optional parameters
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.nextrelatedProject',
        prevEl: '.prevrelatedProject',
    },

});
const relatedProduct = new Swiper('.relatedProduct', {
    // Optional parameters
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.nextrelatedProduct',
        prevEl: '.prevrelatedProduct',
    },

});





const relatedEvents = new Swiper('.relatedEvents', {
    // Optional parameters
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.nextrelatedEvents',
        prevEl: '.prevrelatedEvents',
    },

});
const relatedAwards = new Swiper('.relatedAwards', {
    // Optional parameters
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.nextrelatedAwards',
        prevEl: '.prevrelatedAwards',
    },

});


