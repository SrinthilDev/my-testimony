var slideIndex = 1;
testiSlide(slideIndex);


function arrow(e) {
  testiSlide(slideIndex += e);
}


function testiSlide(e) {

    let slideOne = document.querySelectorAll('.slider1'); 
    let slideTwo = document.querySelectorAll('.slider2');

    
    // if (e > slideOne.length) {
    //   slideIndex = 1
    // }
    // if (e < 1) {
    //   slideIndex = slideOne.length
    //   console.log(slideOne.length);
    // }
    // for (let i = 0; i < slideOne.length; i++) {
    //   slideOne[i].style.display = "none";

    // }
    // slideOne[slideIndex-1].style.display = "block";

}
