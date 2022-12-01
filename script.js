function CheckValdation()
{
    checkName();
    checkLast();
    checkDest();
    checkPhone();
    checkDate();
    checkQuantity();
    
}

function checkName() { 
    var testName = document.getElementById("FirstName").value; 
    var regex = /^[a-zA-Z\s]{2,20}$/; 
    
    if (regex.test(testName)) { // if testing of first is true 
        document.getElementById("FirstName").style.backgroundColor = "green"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById("FirstName").style.backgroundColor = "red";      
        return false; 
    } 
} 

//Checking of Last name field
function checkLast() {
    var last = document.getElementById("LastName").value;
    var regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("LastName").style.color = "green";
        return true;
    }
    else {// if it's not
        document.getElementById("LastName").style.color = "red";
        return false;
    }
}

function checkDest() { 
    var testDest = document.getElementById("Destination").value; 
    var regex = /^[a-zA-Z\s\.\,\d\ ]{5,50}$/; 
    
    if (regex.test(testDest)) { // if testing of dest is true 
        document.getElementById("Destination").style.backgroundColor = "green"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById("Destination").style.backgroundColor = "red"; 
        return false; 
    } 
} 

function checkPhone() { 
    var phone = document.getElementById("Tel").value; 
    var regex = /^\d{3}-(\d{3})-\d{3}$/; 
    
    if (regex.test(phone)) { // if testing of first is true 
        document.getElementById("Tel").style.backgroundColor = "green"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById("Tel").style.backgroundColor = "red";      
        return false; 
    } 
} 

function checkDate() {
    var phone = document.getElementById("DateAndTime").value; 
    var regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/; 
    
    if (regex.test(phone)) { // if testing of first is true 
        document.getElementById("DateAndTime").style.backgroundColor = "green"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById("DateAndTime").style.color = "red";      
        return false; 
    } 
} 

function checkQuantity() {
    var count = document.getElementById("Quantity").value; 
    
    if (count>0) { // if testing of first is true 
        document.getElementById("Quantity").style.backgroundColor = "green"; 
        return true; 
    } 
    
    else {// if it's not 
        document.getElementById("Quantity").style.backgroundColor = "red";    
        return false; 
    } 
} 

