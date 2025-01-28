$(document).ready(function(){
    let popup = $(".pop");
    popup.hide();

    $("form").submit(function(event){
        event.preventDefault(); // Prevents the default form submission behavior
        let popup = $(".pop");
        popup.hide();

        let email = $("#email").val();
        let name = $("#name").val();
        let pname = $("#pName").val();

        function isValidEmail(e) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(e);
        }

        if (email.length > 0 && name.length > 0 && isValidEmail(email)) {
            // Valid input, show thank you message
            popup.show();
            $(".alert").text('');
        } else {
            // Invalid input, show appropriate error message
            if (isValidEmail(email) === false) {
                $(".alert").text("Please enter a valid Email").css({"color":"red", "border" : "2px solid black", "background-color" : "#fefff3", "padding":"10px 20px", "border-radius": "4px", "font-family":"Roboto Slab"});
            } else {
                if (name.length === 0 && pname.length === 0) {
                    $(".alert").text("Please fill in the required fields").css({"color":"red", "border" : "2px solid black", "background-color" : "#fefff3", "padding":"10px 20px", "border-radius": "4px", "font-family":"Roboto Slab"});
                }
            }
        }
    });

    $(".ok").click(function(){
        console.log("OK button clicked");
        popup.hide();
    });

    $("#email").val(""); // Clearing the email input after submission
});
