document.addEventListener('DOMContentLoaded', function (params) {
        function onAllImagesLoaded(container, callback) {
          const images = container.querySelectorAll('.productsSlider img');
          let loadedCount = 0;
          const total = images.length;
        
          if (total === 0) {
            callback();
            return;
          }
        
          function check() {
            loadedCount++;
            if (loadedCount === total) {
              callback();
            }
          }
        
          images.forEach(img => {
            // عکس‌هایی که قبلاً لود شدن
            if (img.complete) {
              check();
            } else {
              // چه موفق چه خطا، باید حساب بشن
              img.addEventListener('load', check);
              img.addEventListener('error', check);
            }
          });
        }
        
        onAllImagesLoaded(document, () => {
          
         let loaderContainer = document.querySelector(".loaderContainer")
        
         setTimeout(() => {
            loaderContainer.classList.add("activeLoader")
         }, 10000);
        
        
        });
        
    });
