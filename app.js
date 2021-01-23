let currSlide = 1;
goToSlide(currSlide);

function arrow(n) {
  goToSlide(currSlide += n);
}

function currentSlide(n){
  goToSlide(currSlide = n);
}


function goToSlide(n) {
  let slideOne = document.querySelectorAll('.slide1');
  let slideTwo = document.querySelectorAll('.slide2');

  slides = [slideOne, slideTwo];

  if(n > slides.length){
    currSlide = 1;
  }
  if(n < 1){
    currSlide = slides.length;
  }

  for(let i=0; i < slides.length; i++){
    console.log(slides.length);
    slides[i].forEach(item => {
       item.style.display = 'none';
    })
    
  }

  slides[currSlide-1].forEach(function(item) {
    item.style.display = 'block'
  });
  
}