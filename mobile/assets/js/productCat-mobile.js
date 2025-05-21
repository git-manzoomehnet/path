let bgImg = document.querySelectorAll(".bgImg img")
let catBox = document.querySelectorAll(".catBox")
let tapFlags = new Array(catBox.length).fill(false); // آرایه برای ذخیره وضعیت "دفعه اول لمس"

bgImg[0].classList.add("activeBg")
console.log(catBox);

catBox.forEach((element, i) => {
    element.addEventListener("touchstart", function (e) {

        // اگر هنوز لمس اول اتفاق نیفتاده
        if (!tapFlags[i]) {
            e.preventDefault(); // نذاره وارد لینک بشه

            if (element.classList.contains("firstBox") || element.classList.contains("lastBox")) {
                bgImg.forEach(img => img.classList.remove("activeBg"));
                bgImg[0].classList.add("activeBg");
                catBox.forEach(box => box.classList.remove("activeBox"));
            } else {
                bgImg.forEach(img => img.classList.remove("activeBg"));
                catBox.forEach(box => box.classList.remove("activeBox"));

                bgImg[i].classList.add("activeBg");
                element.classList.add("activeBox");
            }

            tapFlags[i] = true; // علامت بزن که دفعه اول لمس شده

            // ریست بعد از چند ثانیه
            setTimeout(() => {
                tapFlags[i] = false;
            }, 2000);

        } else {
            // لمس دوم: برو به لینک
            const link = element.querySelector("a");
            if (link) {
                window.location = link.href;
            }
        }
    });
});


window.addEventListener("pageshow", function (event) {
    // اگر از bfcache اومده
    if (event.persisted) {
        // ریست tapFlags
        tapFlags.fill(false);

        // حذف کلاس‌های فعال
        bgImg.forEach(img => img.classList.remove("activeBg"));
        catBox.forEach(box => box.classList.remove("activeBox"));

        // ست کردن وضعیت اولیه
        bgImg[0].classList.add("activeBg");
    }
});
