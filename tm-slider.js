let i = -1;
let time = 3000;
let slideTimer;
let slides = document.getElementsByClassName('slide');
let slideDots = document.getElementsByClassName('dot');

function clickChangeSlide(n){
  clearTimeout(slideTimer);
  console.log(n);
  changeSlide(n, true);
}

function changeSlide(n = i, manual = false){
  
  for(let j = 0; j < slides.length; j++){
    if(j == i) {
      slides[j].classList.add('prev-slide');
      slides[j].classList.remove('active-slide');
      slideDots[j].classList.remove('active-dot');
      continue; 
    }
    slideDots[j].classList.remove('active-dot');
    slides[j].classList.remove('prev-slide'); 
    slides[j].classList.remove('active-slide');
  }
  if(manual){
    if(n < 0) i = slides.length - 1
    else if(n > slides.length - 1) i = 0
    else i = n
  }else i = i < slides.length - 1 ? i+1 : 0;
  
  slides[i].classList.add('active-slide');
  slideDots[i].classList.add('active-dot');
  
  slideTimer = setTimeout('changeSlide()', time);
}

window.onload = changeSlide();