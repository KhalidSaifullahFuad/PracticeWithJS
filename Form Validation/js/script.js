function validateForm(){
    var first_name = document.getElementById('first_name').value;// Using DOM
    var last_name = document.getElementById('last_name').value;// Uning DOM

    first_name = capitalize(first_name);
    last_name = capitalize(last_name);
    
    
    if(first_name=="" || last_name=="")// check if first name or last name is empty
        alert("input field empty");
    else if(checkSpecialCharacter(first_name) || checkSpecialCharacter(last_name)) // if contains special character
        alert("contains special character")
    else
        alert(first_name+" "+last_name);   

    return false; // for stop form to reload
}

function checkSpecialCharacter(str){
    var special_chars = "- $&#.,;:!\"\'<>_"; // list of special character 
    var hasSpecialChar = false;

    for(let i=0; i<special_chars.length; i++){ // traverse on special_chars 
        // checking if str contains any of special_chars character
        if(str.search(special_chars[i].toString())!=-1){ // search retuns positive index if the character is found or returns -1 if the charcter don't appear in str
            hasSpecialChar = true;
        }
    }
    
    return hasSpecialChar;
}

function capitalize(str){
    str = str.trim(); // remove space from front and back
    return str.substr(0,1).toUpperCase() + str.substr(1).toLowerCase(); // uppercase first letter and lowercase rest of letter
}