let bgImg = document.querySelectorAll(".bgImg img")
let catBox = document.querySelectorAll(".catBox")
bgImg[0].classList.add("activeBg")
catBox.forEach((element, i) => {
    element.addEventListener("mousemove", function (params) {


        if (element.classList.contains("firstBox") || element.classList.contains("lastBox")) {
            bgImg.forEach(img => {
                img.classList.remove("activeBg")

            });
            bgImg[0].classList.add("activeBg")

            catBox.forEach((box, i) => {
                box.classList.remove("activeBox")
            })
        } else {
            bgImg.forEach(img => {
                img.classList.remove("activeBg")

            });
             catBox.forEach((box, i) => {
                box.classList.remove("activeBox")
            })
            bgImg[i].classList.add("activeBg")
            element.classList.add("activeBox")
        }
    })
});

