function email_validation(email_input){
    let email_format = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; //this is the RFC 2822 standard email validation

    if (email_input.value.match(email_format)){ //this is done when the email is valid
        //alert("Valid email address!");
        return true;
    } else { //this is done when the email isn't valid
        //alert("You have entered an invalid email address!");
        event.preventDefault() //this stops the page to reload when submitted
        //this part makes the error message, icon and style changes appear on screen
        document.getElementById('email_input').style.border = "2px solid hsl(0, 93%, 68%)";
        document.getElementById('error_txt').style.display = "block";
        document.getElementById('error_img').style.display = "block";
        return false;
    }
}