// Grabbing the needed elements
const sliderImages = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
let current = 0; // the current image slide

// const slideArray = [...sliderImages];

// Clearing out all images before every slide left right
/*
function reset(){
    slideArray.forEach((slideImage) => {
        slideArray.style.display = 'none';
    })
}
/*
const reset = () =>{
    sliderImages.forEach((slideImage) => {
        sliderImage.style.display = 'none';
    })
};
*/

// Clear all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// Initialise the slider
function startSlide(){
    // We reset the slider at every loading 
    reset();
    sliderImages[0].style.display = "block";
}

// Showing previous slide
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// Showing Next slide
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// Left arrow click
document.getElementById('arrow-left').addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
document.getElementById('arrow-right').addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});


