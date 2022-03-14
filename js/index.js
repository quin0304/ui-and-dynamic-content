
let form, textInput, list, message, listItem; //to declare global variables


// to store each of the elements
form = document.querySelector('form');
textInput = document.getElementById('photo-observ');
list = document.getElementById('observ-content');
message = document.querySelector(".feedback");


function addUnusualObjects(e) {
    
    e.preventDefault();
    listItem = document.createElement('li');
      
    // To check and add input text to the list
        if (textInput.value) {
            
            listItem.innerHTML = textInput.value;
            list.appendChild(listItem);
            
            // To clear input text and any error message
            textInput.value = "";
            textInput.focus();
            message.innerHTML = "";
            
        } else {
            
            // Message error to be displayed
            message.innerHTML = "Please, enter your list items!";
        }
    };
    
    
    
    
    // To execute the function
    form.addEventListener("submit", addUnusualObjects);


