/* Fill your code*/
let flag = 1;

function formValidate() {
    var name = document.getElementById("Name").value
    var namePattern = /^[a-zA-Z\s]{8,15}$/;
    console.log(namePattern.test(name));
    if (name.length == 0)
        document.getElementById("name").innerHTML = "Kindly fill in your Name";
    else if (!namePattern.test(name)) {
        flag = 0;
        document.getElementById("name").innerHTML = "Must Contain 8 to 15 characters";
    }

    var address = document.getElementById("Address").value
    if (address.length == 0) {
        flag = 0;
        document.getElementById("address").innerHTML = "Kindly fill Address field";
    }

    var email = document.getElementById("EMail").value
    var emailPattern = /[@._]/
    if (email.length == 0) {
        flag = 0;
        document.getElementById("email").innerHTML = "Kindly provide Email field";
    } else if (!emailPattern.test(email)) {
        flag = 0;
        document.getElementById("email").innerHTML = "Kindly fill valid Email";
    }

    var password = document.getElementById("Password").value
    var passwordPattern = /([A-Z]+[a-z]+[0-9]+[!@#$%^&*()]+)*/
    console.log(passwordPattern.test(password));
    if (password.length == 0) {
        flag = 0;
        document.getElementById("pwd").innerHTML = "Kindly set a Password";
    } else if (!passwordPattern.test(password)) {
        flag = 0;
        document.getElementById("pwd").innerHTML = "Password must contain 1 capital & 1 small letter, 1 digit & 1 symbol";
    }

    var cpassword = document.getElementById("cPassword").value
    if (cpassword.length == 0 && password.length == 0) {
        flag = 0;
        document.getElementById("cpwd").innerHTML = "Kindly confirm your Password";
    } else if (password != cpassword) {
        document.getElementById("cpwd").innerHTML = "confirm password does not match";
    }

    var phone = document.getElementById("Phone").value
    var phonePattern = /^[6-9]\d{9}$/
    if (phone.length == 0) {
        flag = 0;
        document.getElementById("phone").innerHTML = "Kindly Fill Phone Number";
        return false;
    } else if (!phonePattern.test(phone)) {
        flag = 0;
        document.getElementById("phone").innerHTML = "Enter valid number";
        return false;
    }

    if (flag)
        document.getElementById("msg").innerHTML = "Regex Validation Success";
    return false;
}