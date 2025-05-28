let projectListContainer = document.querySelector(".projectListContainer")
let catid = document.querySelector(".catid").innerHTML
let projTitle = document.querySelector(".projTitle").innerHTML

if (catid==214455) {
    selectOption("all architecture",catid)
    
}
else{

    selectOption(projTitle,catid)
}

function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("hidden");
}

function selectOption(text,catidin) {
    document.getElementById("selected-option").textContent = text;
    document.getElementById("dropdown").classList.add("hidden");


    // fetch(`/load-project.inc?catid=${catidin}&refresh=true&lid=2`)
    // .then(response => response.text())
  
    // .then(userData => {

    //     projectListContainer.innerHTML=""
    //     projectListContainer.innerHTML=userData
    //     scrollTopFn()
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
console.log(text);



}

// بستن منو با کلیک بیرون از dropdown
document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdown");
    const container = dropdown.parentElement;
    if (!container.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});



let lastScrollY = window.scrollY;
const elements = document.querySelectorAll('.wipeScroll');
const initialTriggered = new WeakSet(); // ✅ برای ردگیری اینکه هر المان انیمیشن خورده یا نه

const observer = new IntersectionObserver((entries) => {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;

  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      if (!initialTriggered.has(el) || isScrollingDown) {
        el.classList.add('activeScroll', 'animate');
        initialTriggered.add(el); // ✅ از این به بعد انیمیشن این المان زده شده
      }
    }
  });

  lastScrollY = currentScrollY;
}, {
  threshold: 0.01
});

elements.forEach(el => observer.observe(el));


// بخش scrollTop جداگانه
function scrollTopFn() {
  let lastScrollYTop = window.scrollY;
  const scrollTop = document.querySelectorAll('.scrollTop');
  const initialTriggeredTop = new WeakSet();

  const observerTop = new IntersectionObserver((entries) => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollYTop;

    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        if (!initialTriggeredTop.has(el) || isScrollingDown) {
          el.classList.add('visible', 'animate');
          initialTriggeredTop.add(el);
        }
      } else {
        if (!isScrollingDown) {
          el.classList.remove('visible', 'animate');
        }
      }
    });

    lastScrollYTop = currentScrollY;
  }, {
    threshold: 0.01
  });

  scrollTop.forEach(el => observerTop.observe(el));
}

scrollTopFn();
