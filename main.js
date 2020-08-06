// var color = ["pink", "black", "red"];
// var i = 0;
// document.querySelector("#intro").addEventListener("click", function(){
//   i = i < color.length ? ++i : 0;
//   document.querySelector("#intro").style.background = color[i];
// });

const slideshowImages = document.querySelectorAll(".slideshow-img"); // to be more specific, I could use (".intro .slideshow-img")

const nextImageDelay = 3000;
let currentImageCounter = 0; // using let instead of const since its value is expected to be reassigned

slideshowImages[currentImageCounter].style.opacity = 1; //shows current image

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
}
