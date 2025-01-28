$(document).ready(
    // FETCHING JSON DATA
    $.getJSON('data.json', function(data) {
        // ADDING ELEMENTS FROM JSON TO THE HTML DOCUMENT 
        let faqlist = data.FAQ;
        let container = $("#FAQlist");
        for (i=0;i<faqlist.length;i++){
            let list = $("<li class='item'></li>")
            let question= $("<p class='q'>" + faqlist[i].question + "</p>");
            let answer = $("<p class='a'>" + faqlist[i].answer + "</p>");
            let expand = $("<span class='material-symbols-outlined'>expand_more</span>");
            let less= $("<span class='material-symbols-outlined'>expand_less</span>");
            list.append(question);
            list.append(expand);
            list.append(less);
            list.append(answer);
            answer.hide();
            less.hide();
            container.append(list);}

            // LETTING THE ANSWER SHOW OR HIDE UPON CLICKING THE LIST ITEM
            $(document).on("click", ".item", function() {
                let currentItem = $(this);
                let otherItems = container.find(".item").not(currentItem);
    
                otherItems.find(".a").hide(200);
                otherItems.find(".material-symbols-outlined:contains('expand_more')").show();
                otherItems.find(".material-symbols-outlined:contains('expand_less')").hide();
    
                currentItem.find(".a").toggle(200);
                currentItem.find(".material-symbols-outlined:contains('expand_more')").toggle();
                currentItem.find(".material-symbols-outlined:contains('expand_less')").toggle();

                currentItem.toggleClass("opened");
                otherItems.removeClass("opened");
            });

            // CHECKING THE VALIDITY OF INPUT AND CONFIRMING SUBMISSION
            let popup = $(".pop");
            popup.hide();

            $(".form-field button").click(function(){
                let email = $("#email").val();
                let qinput = $("#question").val();
                function isValidEmail(e) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(e);
                  }
                if (email.length > 0 && qinput.length > '' && isValidEmail(email))
                {popup.show();
                    $(".alert").hide();}

            else{
                if (isValidEmail(email) == false)
                $(".alert").text("Please enter a valid Email, it should be in the following format: user@xxx.yyy").css({"color":"red", "border" : "2px solid black", "background-color" : "#fefff3", "padding":"10px 20px", "border-radius": "4px", "font-family":"Roboto Slab", "text-align" : "center"});
            else {
                if (qinput.length == '')
                $(".alert").text("The question field is empty").css({"color":"red", "border" : "2px solid black", "background-color" : "#fefff3", "padding":"10px 20px", "border-radius": "4px", "font-family":"Roboto Slab"});}
            }
            })

            $(".ok").click(function(){
                popup.hide();
            })


    })

    
    
)

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

