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
