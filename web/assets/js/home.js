let tabsContent = document.querySelectorAll(".tabs_content");
let bgImg = document.querySelectorAll(".bgImg img");
let tabsWrapper = document.querySelector(".tabs-wrapper");

// افزودن کلاس activeBg به اولین تصویر
if (bgImg.length > 0) {
  bgImg[0].classList.add("activeBg");
}

// تنظیم ارتفاع tabs-wrapper
if (tabsContent.length <= 1) {
  tabsWrapper.style.height = `100vh`;
} else {
  // tabsWrapper.style.height = `${tabsContent.length * 60}vh`;
}

// عملکرد کلیک روی تب‌ها
tabsContent.forEach((element, i) => {
  element.addEventListener("click", function () {
    // حذف کلاس activeBg از همه تصاویر
    bgImg.forEach(img => img.classList.remove("activeBg"));

    // افزودن کلاس activeBg به تصویر مربوط به تب کلیک‌شده
    if (bgImg[i]) {
      bgImg[i].classList.add("activeBg");
    }

    if (!this.classList.contains("active")) {
      // حذف کلاس‌های فعال از تب قبلی
      document.querySelectorAll(".tabs_content.active").forEach(tab => tab.classList.remove("active"));
      this.classList.add("active");

      setTimeout(() => {
        tabsContent.forEach(tab => tab.classList.remove("activeDisplay"));
      }, 400);

      setTimeout(() => {
        this.classList.add("activeDisplay");
      }, 1000);

      setTimeout(() => {
        tabsContent.forEach(tab => tab.classList.remove("Newactive"));
        this.classList.add("Newactive");
      }, 1200);
    }
  });
});

// ✅ فعال کردن اولین تب هنگام ورود به صفحه
if (tabsContent.length > 0) {
  tabsContent[0].classList.add("active");

  setTimeout(() => {
    tabsContent[0].classList.add("activeDisplay");
  }, 400);

  setTimeout(() => {
    tabsContent[0].classList.add("Newactive");
  }, 800);
}

// ScrollTrigger.create({
//   trigger: ".tabs",
//   start: "top top",
//   pin: true,
//   endTrigger: ".tabs-wrapper",
//   end: "max",
//   onUpdate: (self) => {
//     let nb = Math.round(gsap.utils.mapRange(0, 1, 0, tabsContent.length-1, self.progress));
//     if (!$(".tabs_content").eq(nb).hasClass("active")) {
//       $(".tabs_content.active").removeClass("active");
//       $(".tabs_content").eq(nb).addClass("active");

//       setTimeout(() => {
//         $(".tabs_content").removeClass("activeDisplay");
//       }, 400);

//       setTimeout(() => {
//         $(".tabs_content").eq(nb).addClass("activeDisplay");
//       }, 1000);
//       setTimeout(() => {
//         $(".tabs_content").removeClass("Newactive");
//         $(".tabs_content").eq(nb).addClass("Newactive");
    





// // setTimeout(() => {
  
// //   for (let index = 0; index <=mapDiv.length; index++) {
// //     if (mapDiv[index]==""||mapDiv[index]==null||mapDiv[index]==undefined) {
      
        
// //     }
// //     else{
// //       let xLat = mapDiv[index].getAttribute("data-x")
// //       let newx=new DOMParser().parseFromString(xLat, "text/xml").all[0].innerHTML;
// //       let yLat = mapDiv[index].getAttribute("data-y")
// //       var map = L.map(mapDiv[index]).setView([newx,yLat], 17);
// //       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// //       // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// //       minZoom: "10",
  
// //       }).addTo(map);
      
      
// //       var myIcon = L.icon({ iconUrl: "images/location-64.png", iconSize: [29,34] });
// //       markerContact = L.marker([yLat, newx], { icon: myIcon });
// //       markerContact.addTo(map);
    
// //     }
    
// //     }  
    
// // }, 100);

//       }, 1200);
//     }
//   },
// });






  
  