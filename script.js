var email = document.getElementById("email");
var password = document.getElementById("password");
var rollNumber = document.getElementById("rollNumber");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");


function checkStoragePassword(password) {
    var capitalCheck = false;
    var smallCheck = false;
    var numberCheck = false;
    var specialCheck = false;

    for (var i = 0; i < password.length; i++) {
        if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
            capitalCheck = true;
        } else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
            smallCheck = true;
        } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
            numberCheck = true;
        } else {
            specialCheck = true;
        }
    }
    var message = "missing:";
    if (capitalCheck == false) {
        message += "Capital Letter"
    }
    if (smallCheck == false) {
        message += "Small Letter"
    }
    if (numberCheck == false) {
        message += "Number"
    }
    if (specialCheck == false) {
        message += "Special Character"
    }
    if (capitalCheck == true &&
        smallCheck == true &&
        numberCheck == true &&
        specialCheck == true
    ) {
        return "True";
    }
    else {
        return message;
    }
}

var arrayRollNum = [];

function submit() {
    if (email.value == "") {
       emailError.innerText = "Enter Your Email Adress";
        emailError.style.color = "red";
    } else if (!email.value.includes("@")) {
        emailError.innerText = "Please Enter Valid Email";
        emailError.style.color = "red";
    } else if (password.value == "") {
        passwordError.innerText = "Enter Your Email Password";
        passwordError.style.color = "red";
    } else if (password.value.length < 8) {
        passwordError.innerText = "Password must be greater than 8 characters";
        passwordError.style.color = "red";
    } else {
        var checkPassword = checkStoragePassword(password.value);
        if (checkPassword == "True") {
            document.getElementById("message").innerText = "Form Submitted Successfully";
            document.getElementById("message").style.color = "green";
        } else {
            alert(checkPassword);
        }
        console.log(email.value)
        console.log(password.value)
        rollNumber.value = generateRollNumberFunction();
    }
}
function generateRollNumberFunction() {
    var create = true;
    while (create == true) {
        var generateRollNumber = (Math.random() * 99999).toFixed(0);
        if (!arrayRollNum.includes(generateRollNumber)) {
            arrayRollNum.push(generateRollNumber);
            create = false;
            return generateRollNumber;
        }
        else {
            create = true;
        }
    }
}