// JavaScript to display the content on button click
document.getElementById('bars').addEventListener('click', function () {
    var content = document.getElementById('list');
    // Toggle display between 'block' and 'none'
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';//
    }
});
const slider = document.getElementById("slider");
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;

let currentIndex = 0;
let startX = 0;
let endX = 0;

// Detects touch start
slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

// Detects touch end and handles swipe action
slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        previousSlide();
    }
});

function nextSlide() {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
        updateSlidePosition();
    }
}

function previousSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
