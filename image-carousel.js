const slideShowImages = document.querySelectorAll('.image-carousel-container .carousel-image');
const nextImageDelay = 5000;

let currentImageCount = 0;


slideShowImages[currentImageCount].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideShowImages[currentImageCount].style.display = "none";
    currentImageCount = (currentImageCount + 1) % slideShowImages.length;
    slideShowImages[currentImageCount].style.display = "block";
}