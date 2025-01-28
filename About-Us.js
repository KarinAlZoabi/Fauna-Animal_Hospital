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

$(document).ready(function() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('show');
            } else {
                $(entry.target).removeClass('show');
            }
        });
    });

    let hiddenElements = $(".hidden");
    hiddenElements.each((index, el) => {
        observer.observe(el);
    });
});