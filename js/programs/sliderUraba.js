var slideIndexU = 1;
showSlidesU(slideIndexU);

// Next/previous controls
function plusSlidesU(n) {
  showSlidesU(slideIndexU += n);
}

// Thumbnail image controls
function currentSlideU(n) {
  showSlidesU(slideIndexU = n);
}

function showSlidesU(n) {
  var i;
  var slides = document.getElementsByClassName("urabaSlidesPrograms");
  var dots = document.getElementsByClassName("progDotU");
  if (n > slides.length) {slideIndexU = 1}
  if (n < 1) {slideIndexU = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexU-1].style.display = "block";
  dots[slideIndexU-1].className += " active";
}
