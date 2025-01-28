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
      $('.contactDropdown').stop().slideToggle(700); //animation speed
  });

  $('.contactDropdown').on('mouseleave', function () {
      $('.contactDropdown').stop().slideToggle(700);
  });
});