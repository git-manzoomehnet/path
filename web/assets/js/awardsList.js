let awardBox = document.querySelectorAll(".awardBox")

awardBox.forEach((element,i) => {
    let idMember = element.getAttribute("data-id")
    let idImage = element.getAttribute("data-img")
    let idImageList = element.getAttribute("data-imgList")
    fetch(`/load-awards.inc?id=${idMember}&img=${idImage}&imgList=${idImageList}`)
    .then(response => response.text())
  
    .then(userData => {

      element.innerHTML=userData
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });