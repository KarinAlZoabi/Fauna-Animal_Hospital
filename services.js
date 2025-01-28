$(document).ready(function() {
  // FETCHING JSON DATA
   $.getJSON('data.json', function(data) {
    // CREATING ELEMENTS FROM JSON USING HTML
     let list = data.services;
     
     for (i = 0; i < list.length; i++) {
       let item = $("<div class='servitem'></div>");
       let subitem =$("<div class='subitm'></div>");
       let imgcont = $("<div class='imgcont'></div>");
       let name = $("<h1 class='name'>" + list[i].name + "</h1>");
       let desc = $("<p class='description'>" + list[i].description + "</p>");
       let image = $("<img>");
      let icon  = $("<img class='icon'>")
       
      image.attr("src", list[i].image);
       icon.attr("src", list[i].icon);
       
       name.addClass("hidden");
       desc.addClass("hidden");

      //  OBSERVING ELEMENTS FOR SUITABLE ANIMATION
      observer.observe(name[0]); 
      observer.observe(desc[0]);

      // ADDING ELEMENTS TO THE DOCUMENT
       name.appendTo(subitem);
       desc.appendTo(subitem);
       icon.appendTo(item);
       subitem.appendTo(item);
       image.appendTo(imgcont);
       imgcont.appendTo(item);
      item.appendTo($("#services"));
       
     }
   });

  //  CHANGING CLASS OF ELEMENTS TO CHANGE CSS UPON INTERSECTION
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

