const lat = document.querySelector("#map").getAttribute("data-y");
const lng = document.querySelector("#map").getAttribute("data-x");

const map = L.map('map').setView([lat, lng], 14);

// تایل تیره
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// ساخت مارکر سفارشی با HTML
const customIcon = L.divIcon({
  className: '', // بدون کلاس پیش‌فرض leaflet
  html: `
    <div class="absolute">
      <div
        class="flex items-center justify-center bg-main2 w-[61.84px] h-[61.84px] after:absolute after:w-[22px] after:h-[22px] after:bg-white after:rounded-full rounded-full">
        <svg width="68" height="70" viewBox="0 0 68 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_356_4597)">
<path d="M33.7449 66.8889C50.9209 66.8889 64.6635 52.5101 64.6635 35C64.6635 17.4899 50.9209 3.11108 33.7449 3.11108C16.5688 3.11108 2.82617 17.4899 2.82617 35C2.82617 52.5101 16.5688 66.8889 33.7449 66.8889Z" fill="#807F63" stroke="#807F63" stroke-width="7"/>
<path d="M33.3096 34.044C32.0356 34.044 30.8138 33.5403 29.9129 32.6439C29.0121 31.7475 28.5059 30.5316 28.5059 29.2639C28.5059 27.9961 29.0121 26.7803 29.9129 25.8839C30.8138 24.9874 32.0356 24.4838 33.3096 24.4838C34.5836 24.4838 35.8055 24.9874 36.7063 25.8839C37.6071 26.7803 38.1132 27.9961 38.1132 29.2639C38.1132 29.8916 37.989 30.5132 37.7476 31.0931C37.5062 31.6731 37.1523 32.2001 36.7063 32.6439C36.2602 33.0878 35.7307 33.4399 35.1479 33.6801C34.565 33.9203 33.9405 34.044 33.3096 34.044ZM33.3096 15.8796C29.7424 15.8796 26.3212 17.2897 23.7989 19.7998C21.2765 22.3098 19.8594 25.7142 19.8594 29.2639C19.8594 39.3021 33.3096 54.1204 33.3096 54.1204C33.3096 54.1204 46.7598 39.3021 46.7598 29.2639C46.7598 25.7142 45.3427 22.3098 42.8203 19.7998C40.2979 17.2897 36.8768 15.8796 33.3096 15.8796Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_356_4597">
<rect width="68" height="70" fill="white"/>
</clipPath>
</defs>
</svg>

      </div>
    </div>
  `,
  iconSize: [61.48, 61.48],
  iconAnchor: [24, 24] // نقطه وسط مارکر روی مختصات باشه
});

L.marker([lat, lng], { icon: customIcon }).addTo(map);


let openFormBtn = document.querySelector(".openFormBtn")
let popForm = document.querySelector(".popForm")
let bgClose = document.querySelector(".bgClose")
let closeFormPop = document.querySelector(".closeFormPop")
openFormBtn.addEventListener("click", function (params) {
  popForm.classList.remove("-translate-y-[100%]")
})
bgClose.addEventListener("click", function (params) {
  popForm.classList.add("-translate-y-[100%]")
})
closeFormPop.addEventListener("click", function (params) {
  popForm.classList.add("-translate-y-[100%]")
})



const host = {
  debug: !1,
  settings: {
    "connection.web.callcommand": "/",
    "connection.web.trust_login": "https://basispanel.ir/apicms",
    "connection.web.basiscore": "https://basispanel.ir/apicms",
    "connection.web.media": "https://basispanel.ir/apicms",
    "connection.web.userbehavior": "https://basispanel.ir/apicms",
    "default.dbsource.verb": "post",
    "default.call.verb": "get",
    "default.viewCommand.groupColumn": "prpid",
    "default.dmnid": "4892",
    "default.binding.regex": "\\{##([^#]*)##\\}",
  },
};





let captchaInput;
let captchaContainerclass;

let loaderContainer = document.querySelector(".loaderContainer");
let formBtn = document.querySelector(".formBtn");
let loaderForm = document.querySelector(".loaderForm");
formBtn.addEventListener("click", function (params) {
  // formBtn.querySelector("span").style.display = "none";
  loaderForm.style.display = "block";
  formBtn.querySelector("span").style.display = "none";

  setTimeout(() => {
    let allertData = document.querySelectorAll("[data-bc-validation-part] li")


    allertData.forEach(element => {
      let prevInput = element.parentElement.previousElementSibling
      console.log("prevInput", prevInput);

      if (prevInput?.value == "") {

        let newAllert = document.createElement("div")
        newAllert.className = "flex newAllert items-center bg-[#C07F5D80] px-3 gap-x-3 absolute inset-0 w-full h-full "

        newAllert.innerHTML = `
     <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_705_7340)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.8263 0.0244141V30C18.6086 30 9.36614 30 0.148438 30V0.0244141C9.26702 0.0244141 18.7077 0.0244141 27.8263 0.0244141ZM2.10596 1.75612V28.2195H25.844V1.75612H2.10596Z" fill="#FF0000"/>
<path d="M13.9757 26.5607C15.0431 26.5607 15.9085 25.709 15.9085 24.6583C15.9085 23.6076 15.0431 22.7559 13.9757 22.7559C12.9083 22.7559 12.043 23.6076 12.043 24.6583C12.043 25.709 12.9083 26.5607 13.9757 26.5607Z" fill="#FF0000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3625 3.48779V20.6341H12.5625C12.5625 14.9268 12.5625 9.19511 12.5625 3.48779H15.3625Z" fill="#FF0000"/>
</g>
<defs>
<clipPath id="clip0_705_7340">
<rect width="28" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
<span class=" font-Blinker300 capitalize text-base text-[#FF0000]">
Please Enter the code
</span>
`
        element.parentElement.parentElement.insertAdjacentElement("beforeend", newAllert)
      }

      setTimeout(() => {
          formBtn.querySelector("span").style.display = "block";

          loaderForm.style.display = "none";

  document.querySelectorAll(".newAllert").forEach(al => {
        al.remove()
      });
      }, 3000);
    })
  }, 100);
  if (captchaInput.value == "") {
    let newAllert = document.createElement("div")
    newAllert.className = "flex newAllert items-center bg-[#C07F5D80] px-3 gap-x-3 absolute inset-0 w-full h-full "

    newAllert.innerHTML = `
     <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_705_7340)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.8263 0.0244141V30C18.6086 30 9.36614 30 0.148438 30V0.0244141C9.26702 0.0244141 18.7077 0.0244141 27.8263 0.0244141ZM2.10596 1.75612V28.2195H25.844V1.75612H2.10596Z" fill="#FF0000"/>
<path d="M13.9757 26.5607C15.0431 26.5607 15.9085 25.709 15.9085 24.6583C15.9085 23.6076 15.0431 22.7559 13.9757 22.7559C12.9083 22.7559 12.043 23.6076 12.043 24.6583C12.043 25.709 12.9083 26.5607 13.9757 26.5607Z" fill="#FF0000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3625 3.48779V20.6341H12.5625C12.5625 14.9268 12.5625 9.19511 12.5625 3.48779H15.3625Z" fill="#FF0000"/>
</g>
<defs>
<clipPath id="clip0_705_7340">
<rect width="28" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
<span class=" font-Blinker300 capitalize text-base text-[#FF0000]">
Please Enter the code
</span>
`
    captchaContainerclass.insertAdjacentElement("beforeend", newAllert)
    setTimeout(() => {
      document.querySelectorAll(".newAllert").forEach(al => {
        al.remove()
      });
    }, 3000);
  }
});
function onSource1(args) {

  const captcha = document.querySelector(
    ".homeForm1 #requestBox input[name='captcha']"
  ).value;
  const captchaid = document.querySelector(
    ".homeForm1 #requestBox input[name='captchaid']"
  ).value;
  const stringJson = JSON.stringify(args.source?.rows[0]);

  $bc.setSource("edit.object1", {
    value: stringJson,
    captcha: captcha,
    captchaid: captchaid,
  });
}

let responsMsg = document.querySelector(".responsMsg1");
let responsMsgIn = document.querySelector(".responsMsg1 span");
async function OnProcessedEditObject1(args) {

  const response = args.response;
  const json = await response.json();


  if (json.errorid == 6) {

    responsMsg.style.display = "block";
    responsMsgIn.innerHTML = "Your request has been successfully registered";
    responsMsgIn.style.color = "#807F63";
    document.querySelector("form").reset();
    let questions = document.querySelectorAll(
      ".homeForm1 div[data-bc-question]"
    );
    setTimeout(() => {
      responsMsg.style.display = "none";
      formBtn.querySelector("span").style.display = "flex";
      loaderForm.style.display = "none";
    }, 2000);
  }
  if (json.errorid == 4) {


    responsMsgIn.innerHTML = "Something went wrong, please try again";

    responsMsg.style.display = "block";
    responsMsgIn.style.color = "#FF0000";
    document.querySelector("form").reset();

    setTimeout(() => {
      formBtn.querySelector("span").style.display = "flex";
      loaderForm.style.display = "none";
      responsMsg.style.display = "block";
    }, 2000);
  }
  if (json.errorid == 15 && captchaInput.value != "") {


    responsMsgIn.innerHTML = "captcha is wrong";
    responsMsgIn.style.color = "#FF0000";

    setTimeout(() => {
      formBtn.querySelector("span").style.display = "flex";
      loaderForm.style.display = "none";
      responsMsg.style.display = "block";
    }, 2000);
  }
}

function renderFn1(params) {


  document.querySelector(".qclass8").style.display = "flex";
  captchaInput = document.querySelector(".captchaContainerclass .codeinputm");
  captchaContainerclass = document.querySelector(".captchaContainerclass");
  loaderContainer.style.display = "none";

  let questions = document.querySelectorAll(".homeForm1 div[data-bc-question]");
  questions.forEach((element) => {
    element.classList.add("afterStar");


  });
}

function renderEditobject(params) {
  loaderContainer.style.display = "none";
}