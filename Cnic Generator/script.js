// Get Input Id's
var userName = document.getElementById("userName");
var contactNumber = document.getElementById("contactNumber");
var age = document.getElementById("age");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cnic = document.getElementById("cnic");
var CnicSuccessfuly = document.getElementById("CnicSuccessfuly")
// Get Input Error Id's
var nameError = document.getElementById("nameError");
var contactNumberError = document.getElementById("contactNumberError");
var ageError = document.getElementById("ageError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

// html Tag => inner html
//input value => value


function submitBtn() {
    var hasError = false;

    if (userName.value == "") {
        nameError.innerText = "Must Enter Your Name"
        hasError = true
    }
    else if (userName.value.length < 5) {
        nameError.innerText = "Name must Greater than 5 chracter"
        hasError = true
    }
    else {
        nameError.innerText = ""
        hasError = false
    }
    console.log(userName.value)
    if (email.value == "") {
        emailError.innerText = "Must Enter Your Email Address"
        hasError = true;
    }
    else if (!email.value.includes("@")) {
        emailError.innerText = "Please Enter Valid Email Address"
        hasError = true
    }
    else {
        emailError.innerText = ""
        hasError = false
        console.log(email.value)
    }
    if (password.value == "") {
        passwordError.innerText = "Must Enter Your Email Password"
        hasError = true;
    }
    else if (password.value.length < 8) {
        passwordError.innerText = "Email Passowrd Must Greater Than 8 Character"
        hasError = true;
    }
    else {
        passwordError.innerText = ""
        hasError = false
    }
    console.log(password.value)

    if (contactNumber.value == "" || contactNumber.value == 0) {
        contactNumberError.innerText = "Must Enter Your Contact Number"
        hasError = true;
    }
    else if (contactNumber.value.length < 11) {
        contactNumberError.innerText = "Your Contact Number must greater than 11 number"
        hasError = true;
    }
    else {
        contactNumberError.innerText = ""
        hasError = false;
    }
    console.log(contactNumber.value)
    if (age.value == "" || age.value == 0) {
        ageError.innerText = "Must Enter Your Age"
        hasError = true
    }
    else if (age.value < 18) {
        ageError.innerText = "Your are Eligible for CNIC"
        hasError = true;
    }
    else {
        ageError.innerText = ""
        hasError = false
    }
    console.log(age.value)
    if (hasError == false) {
        var a = (Math.random() * 10000000000000).toFixed(0)
        var Cnic = a.toString().substring(0, 4) + "-" + a.toString().substring(4, 12) + "-" + a.toString().substring(12)
        cnic.value = Cnic
        CnicSuccessfuly.innerText = "You Got Cnic Successfully"
        console.log(cnic.value)
    }

}

