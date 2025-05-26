let menuBar = document.querySelector(".menuBar")
let megaMenu = document.querySelector(".megaMenu")
let header = document.querySelector("header")
let darkFlag = false

let closeMega = document.querySelector(".closeMega")
menuBar.addEventListener("click" , function(params) {
    megaMenu.classList.remove("translate-x-[100%]")
})
closeMega.addEventListener("click" , function(params) {
    megaMenu.classList.add("translate-x-[100%]")
})
    let actualScroll = 0


    window.addEventListener('scroll', () => {
        const top = Math.min(-(window.scrollY - actualScroll + header.clientHeight), 0)
        if (window.scrollY > actualScroll) {
            actualScroll = window.scrollY
            header.classList.add("-translate-y-[100%]")
        }

        if (top === 0) {
            actualScroll = window.scrollY + header.clientHeight
            header.classList.remove("-translate-y-[100%]")
            if (window.scrollY > 50) {
                header.classList.add("activeHeaderBg")
            }
            else {
                if (!darkFlag) {
                    header.classList.remove("activeHeaderBg")
                }

            }
        }
    })

