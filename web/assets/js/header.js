let menuBar = document.querySelector(".menuBar")
let megaMenu = document.querySelector(".megaMenu")
let closeMega = document.querySelector(".closeMega")
menuBar.addEventListener("click" , function(params) {
    megaMenu.classList.remove("translate-x-[100%]")
})
closeMega.addEventListener("click" , function(params) {
    megaMenu.classList.add("translate-x-[100%]")
})
