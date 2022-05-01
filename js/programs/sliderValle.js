var slideIndexV = 1;
showSlidesV(slideIndexV);

// Next/previous controls
function plusSlidesV(n) {
  showSlidesV(slideIndexV += n);
}

// Thumbnail image controls
function currentSlideV(n) {
  showSlidesV(slideIndexV = n);
}

function showSlidesV(n) {
  var i;
  var slides = document.getElementsByClassName("valleSlidesPrograms");
  var dots = document.getElementsByClassName("progDotV");
  if (n > slides.length) {slideIndexV = 1}
  if (n < 1) {slideIndexV = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexV-1].style.display = "block";
  dots[slideIndexV-1].className += " active";
}
