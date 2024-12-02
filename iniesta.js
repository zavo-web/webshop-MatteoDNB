document.addEventListener("DOMContentLoaded", () => {

    const mainImage = document.querySelector(".main-image");
    const thumbnails = document.querySelectorAll(".thumbnails img");
  
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {

        const hudigtMainSrc = mainImage.src;
  
        mainImage.src = thumbnail.src;
        thumbnail.src = hudigtMainSrc;
      });
    });
  });
  