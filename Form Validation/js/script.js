function validateForm(){
    var first_name = document.getElementById('first_name').value;// Using DOM
    var last_name = document.getElementById('last_name').value;// Uning DOM
    var email = document.getElementById('email');

    first_name = capitalize(first_name);
    last_name = capitalize(last_name);
    
    
    if(first_name=="" || last_name=="")// check if first name or last name is empty
        setError("Please fill out empty field");
    else if(checkSpecialCharacter(first_name) || checkSpecialCharacter(last_name) || validateEmail(email)) // if contains special character
        setError("Contains special character")
    else{
        setError("");
        alert(first_name+" "+last_name);   
    }
    return false; // for stop form to reload
}

function checkSpecialCharacter(str){
    var special_chars = " `!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~"; // list of special character 
    var hasSpecialChar = false;

    for(let i=0; i<special_chars.length; i++){ // traverse on special_chars 
        // checking if str contains any of special_chars character
        if(str.includes(special_chars[i])){ // search retuns positive index if the character is found or returns -1 if the charcter don't appear in str
            hasSpecialChar = true;
            break;
        }
    }
    
    return hasSpecialChar;
}


function setError(errorMsg){
    // document.getElementById('first_name').style.borderColor = "red";
    document.getElementById("error-msg").innerText = errorMsg;
}

function capitalize(str){
    str = str.trim(); // remove space from front and back
    return str.substr(0,1).toUpperCase() + str.substr(1).toLowerCase(); // uppercase first letter and lowercase rest of letter
}


function validateEmail(email){
    var email_str = email.value;

}