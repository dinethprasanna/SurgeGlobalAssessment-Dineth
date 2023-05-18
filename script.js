document.addEventListener("DOMContentLoaded", function(event) {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<div class='slider-arrow left'><img src='./images/icons/slider-arrow.png' alt='Slider Left Arrow'></div>",
        nextArrow:"<div class='slider-arrow right'><img src='./images/icons/slider-arrow.png' alt='Slider Right Arrow'></div>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});


// set sticky nav bar
let header = document.querySelector(`.nav-bar`);

window.addEventListener('scroll', function(){ 
  //Here you forgot to update the value
  scrollpos = window.scrollY;
  
  if(scrollpos > 1){
    console.log('Now Fixed');
    header.classList.add('sticky');
  }
  else{
    console.log('####');
    header.classList.remove('sticky');
  }
  
  
});


// expand mobile navigation 
const expandBtn = document.querySelector('.expander');
const mobNav = document.querySelector(`.mob-nav`);
const mobNavCloserBtn = document.querySelector('#pop-up-close');

expandBtn.addEventListener('click', () => {
  mobNav.style.display = 'flex';
  expandBtn.style.display = 'none';
});

mobNavCloserBtn.addEventListener('click', () => {
  mobNav.style.display = 'none';
  expandBtn.style.display = 'block';
})