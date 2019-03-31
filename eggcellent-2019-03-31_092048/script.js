/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


// SLIDE SHOW
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length<1) return;
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function miniegg(n) {
  var minieggs = document.getElementsByClassName("minieggs");
  minieggs[n].style.display = "block";
}
    var i=0;
    var timer = setInterval(function() {
      miniegg(i);
            i++;
            if(i===document.getElementsByClassName("minieggs").length) clearInterval(timer);
        },1000);
  