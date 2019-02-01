//Navigation Slide in and Out===================================
const navToggle = document.querySelector('.nav-button');

navToggle.addEventListener('click', _ => {
  document.body.classList.toggle('nav-is-open')
});

//Nav Clicks===================================================
const nav = document.querySelector('nav');

nav.addEventListener('click', e => {
  document.body.classList.remove('nav-is-open')
})

//*------Smoooth Scroll to About-----------*/

function smoothScrollTo(n) {
  document.getElementById(n).scrollIntoView({
    behavior: 'smooth',
    block: 'start'})
};

//Search ---------------------------------------------*/
const searchToggle = document.querySelector('.search-button');
const searchForm = document.querySelector('.searchForm');

searchToggle.addEventListener('click', e => {
  searchForm.classList.toggle('search-form-open')
})

//Scroll and change sticky colors -------------------------------*/
const hotsection = document.querySelector('#hotsection');
const hotsectioncoord = hotsection.getBoundingClientRect();
const stickySVGs = document.querySelectorAll('.sticky > svg');

window.onscroll = function() {changeStickyColors ()}

function changeStickyColors() {
  if (document.body.scrollTop > hotsectioncoord.top || document.documentElement.scrollTop > hotsectioncoord.top) {
    for (var i = 0; i < stickySVGs.length; i++) {
      stickySVGs[i].classList.add("colorize");
    }
  } else {
    for (var i = 0; i < stickySVGs.length; i++) {
      stickySVGs[i].classList.remove("colorize");
    }
  }
}

//Slideshow===================================================
var slideIndex = 1;

function plusIndex(n) {
  showImage(slideIndex = slideIndex + n);
};

function currentSlide(n) {
  slideIndex = n;
  showImage(n);
};

function showImage(n) {
   var slide = document.getElementsByClassName("image-holder");
   var dotIndicator = document.getElementsByClassName("dots");

   //boundary conditions
   if (n > slide.length) {
     slideIndex = 1
   };
   if (n < 1) {
     slideIndex = slide.length
   };

   //display only one image;
   for (var i = 0; i < slide.length; i++) {
     if (slideIndex-1 == i) {
       slide[i].style.display = "block";
       dotIndicator[i].style.background = "#333333";
     } else {
       slide[i].style.display = "none";
       dotIndicator[i].style.background = " #FF931E";
     }
   };

};

autoSlide();
function autoSlide() {
  plusIndex(1);
  setTimeout(autoSlide, 4000);
};
