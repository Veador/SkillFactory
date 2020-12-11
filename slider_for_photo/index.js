let images = [];

function sliderInit(images) {
  if (!images || !images.length) return;

  let sliderWrapper = document.querySelector(".slider");
  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");

  initImages();
  initArrows();

  function initImages() {
    images.forEach((image, index) => {
      let imageElement = document.createElement("div");
      imageElement.className = `image n${index} ${index === 0 ? "active" : ""}`;
      imageElement.dataset.index = index;
      imageElement.style.backgroundImage = `url(${image.url})`;
      sliderImages.appendChild(imageElement);
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrows").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let lastIndex = images.length - 1;
        let currenNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = currenNumber === 0 ? lastIndex : currenNumber - 1;
        } else {
          nextNumber = currenNumber === lastIndex ? 0 : currenNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });

    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(`${num}`).classList.add("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  sliderInit(images);
});
