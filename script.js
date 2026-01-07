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
    if (userName.value == "") {
        nameError.innerText = "Must Enter Your Name"
    }
    else if (userName.value.length < 5) {
        nameError.innerText = "Name must Greater than 5 chracter"
    }
    else {
        nameError.innerText = ""
    }

    if (email.value == "") {
        emailError.innerText = "Must Enter Your Email Address"
    }
    else if (!email.value.includes("@")) {
        emailError.innerText = "Please Enter Valid Email Address"
    }
    else {
        emailError.innerText = ""
    }
    if (password.value == "") {
        passwordError.innerText = "Must Enter Your Email Password"
    }
    else if (password.value.length < 8) {
        passwordError.innerText = "Email Passowrd Must Greater Than 8 Character"
    }
    else {
        passwordError.innerText = ""
    }

    if (contactNumber.value == "" || contactNumber.value == 0) {
        contactNumberError.innerText = "Must Enter Your Contact Number"
    }
    else if (contactNumber.value.length < 11) {
        contactNumberError.innerText = "Your Contact Number must greater than 11 number"
    }
    else {
        contactNumberError.innerText = ""
    }

    if (age.value == "" || age.value == 0) {
        ageError.innerText = "Must Enter Your Age"
    }
    else if (age.value < 18) {
        ageError.innerText = "Your are Eligible for CNIC"
    }
    else {
      CnicSuccessfuly.innerText= "Your Cnic generate Successfully"
    }
}
