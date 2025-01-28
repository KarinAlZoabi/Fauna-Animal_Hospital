var slides = document.getElementsByClassName("photo-slide");
var navButtons = document.getElementsByClassName("nav-btn");
const motto = document.querySelectorAll(".motto")
var slideIndex = 0;
var mottoIndex = 0;
var intervalId;
var touchStartX = 0;
var touchEndX = 0;

//PHOTO SLIDES

//manual navigation 
function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        navButtons[i].classList.remove("active");
    }
    slides[index].classList.add("active");
    navButtons[index].classList.add("active");
    slideIndex = index;
}

function showMotto(index) {
    for (var i = 0; i < motto.length; i++) {
        motto[i].style.display = "none";
    }
    motto[index].style.display = "block";
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
    mottoIndex = slideIndex;
    showMotto(mottoIndex); 
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
}

function handleSwipe() {
    var swipeThreshold = 50; // screen sensitivity

    if (touchStartX - touchEndX > swipeThreshold) {
        // Swiped left
        nextSlide();
        startAutomaticSlideChange();
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swiped right
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
        mottoIndex = slideIndex;
        showMotto(mottoIndex);
        startAutomaticSlideChange();
    }
}

for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", function () {
        var buttonIndex = Array.from(navButtons).indexOf(this);
        showSlide(buttonIndex); // Show the selected slide
        mottoIndex = buttonIndex;
        showMotto(mottoIndex);
        startAutomaticSlideChange();
    });
}

//auto navigation
function startAutomaticSlideChange() {
    clearInterval(intervalId);
    intervalId = setInterval(function() {
        nextSlide();
    }, 7000);
}

window.addEventListener('load', function () {
    startAutomaticSlideChange();
    showMotto(0);
});

showSlide(slideIndex);

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchend", handleTouchEnd, false);

//DROP DOWN MENU
$(document).ready(function () {
    $('#check-icon').click(function () {
        $('#nav2').slideToggle(700);
    });


    $('#about-menu').on('mouseenter', function () {
        $('.aboutDropdown').stop().slideToggle(700); // animation speed
    });

    $('.aboutDropdown').on('mouseleave', function () {
        $('.aboutDropdown').stop().slideToggle(700);
    });

    $('#contact-menu').on('mouseenter', function () {
        $('.contactDropdown').stop().slideToggle(700);
    });

    $('.contactDropdown').on('mouseleave', function () {
        $('.contactDropdown').stop().slideToggle(700);
    });

    
});


//SEARCH FIELD APPEAR
const searchToggle = document.querySelector(".searchToggle");
const searchField = document.querySelector(".search-field");

searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");

    const searchIcon = document.querySelector(".bx-search");
    const cancelIcon = document.querySelector(".bx-x");

    
    if (searchToggle.classList.contains("active")) {
        searchIcon.style.display = "none";
        cancelIcon.style.display = "block";
    } else {
        searchIcon.style.display = "block";
        cancelIcon.style.display = "none";
    }

    // Toggle visibility of the search field
    searchField.classList.toggle("active");
});