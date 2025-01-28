//function for the scroll indicator
document.addEventListener("DOMContentLoaded", function() {
const indicator = document.querySelector(".indicator");
const indicatorContainer = document.querySelector(".indicator-container");

window.onscroll = function() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / (documentHeight - viewportHeight)) * 100;

    // Ensures the scroll percentage is within 0 to 100
    const cappedScrollPercent = Math.min(Math.max(scrollPercent, 0), 100);

    indicator.style.width = cappedScrollPercent + "%";
};
});

//popup image function
const popupImage = document.querySelector('.popup-image');
let currentSlideIndex = 0;

function plusSlides(n) {
    showSlides(currentSlideIndex += n);
}

function showSlides(n) {
    const images = document.querySelectorAll('.card img');
    if (n >= images.length) {
        currentSlideIndex = 0;
    } else if (n < 0) {
        currentSlideIndex = images.length - 1;
    } else {
        currentSlideIndex = n;
    }
    const imgElement = popupImage.querySelector('img');
    imgElement.src = images[currentSlideIndex].src;

    //show description based on slide
    const content = document.querySelectorAll('.card .content p')[currentSlideIndex];
    const description = document.querySelector('.popup-image .description');
    description.textContent = content.textContent;
}

document.querySelectorAll('.card').forEach((card, index) => {
    card.onclick = () => {
        disableScroll();
        currentSlideIndex = index;
        showSlides(currentSlideIndex);
        popupImage.style.display = 'block';
    };
});

function closePopup() {
    enableScroll();
    popupImage.style.display = 'none';
}

document.addEventListener('keydown', function (e) {
    if (popupImage.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            plusSlides(-1);
        } else if (e.key === 'ArrowRight') {
            plusSlides(1);
        } else if (e.key === 'Escape') {
            closePopup();
        }
    }
});

document.querySelector('.popup-image span').onclick = () =>
{
    document.querySelector('.popup-image').style.display = 'none';
}

//close popup when users presses anywhere on screen
const popup = document.querySelector(".popup-image")
popup.addEventListener("click", (e)=>{
    enableScroll()
    if (e.target === popup)
    {
        popup.style.display = 'none'
    }
})

function handlePopupTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handlePopupTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handlePopupSwipe();
}

function handlePopupSwipe() {
    var swipeThreshold = 50; // screen sensitivity

    if (touchStartX - touchEndX > swipeThreshold) {
        // Swiped left
        plusSlides(1);
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swiped right
        plusSlides(-1);
    }
}

popupImage.addEventListener("touchstart", handlePopupTouchStart, false);
popupImage.addEventListener("touchend", handlePopupTouchEnd, false);

// scroll to top btn
let toTop = document.getElementsByClassName("scrollTop-btn");
window.addEventListener("scroll", function(){
    let screen = document.documentElement.scrollTop;
    if (screen == 0)
    {
        toTop[0].style.display= "none";
    }
    else{
        toTop[0].style.display= "block";
    }
})


//SEARCH FUNCTION
document.querySelector('.bx-search').addEventListener('click', () => {
    search();
});

document.querySelector('.bx-x').addEventListener('click', () => {
    const searchBar = document.querySelector(".search-bar");
    searchBar.value = "";
    search();
});

document.querySelector('.search-bar').addEventListener('input', () => {
    search();
});

const search = () => {
    const searchBar = document.querySelector(".search-bar").value.toUpperCase();
    const galleryItems = document.getElementById("photo-container");
    const pet = galleryItems.querySelectorAll(".card");

    for (var i = 0; i < pet.length; i++) {
        let match = pet[i].getElementsByClassName("petName")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchBar) > -1) {
                pet[i].style.display = "";
            } else {
                pet[i].style.display = "none";
            }
        }
    }
}



//STOP SCROLLING
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1, 33: 1, 34: 1, 35: 1, 36: 1 };

function preventDefaultt(e) {
    e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefaultt(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// function to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefaultt, false); // older FF
    window.addEventListener(wheelEvent, preventDefaultt, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefaultt, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

//function to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefaultt, false);
    window.removeEventListener(wheelEvent, preventDefaultt, wheelOpt);
    window.removeEventListener('touchmove', preventDefaultt, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}