$(document).ready(function () {

    $('#signUpBtn').on('click', addUser);

    $('#logInBtn').on('click', logInUser);



});

function addUser(event) {

    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var age = $("#age").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    var ssn = $("#ssn").val();
    var email = $("#email").val();
    var password = $("#password").val();


    var newUser = {
        'firstname': firstname,
        'lastname': lastname,
        'email': email,
        'password': password,
        'age': age,
        'dob': dob,
        'ssn': ssn,
        'gender': gender
    }

    $.ajax({
        type: 'POST',
        data: newUser,
        url: '/adduser',
        dataType: 'JSON'
    }).done(function (response) {

    });

}

function logInUser(event) {

    var email = $("#logInUsername").val();
    var password = $("#logInPswd").val();

    var newLogin = {
        'email': email,
        'password': password
    }
    
    $.ajax({
        type: 'POST',
        data: newLogin,
        url: '/login',
        dataType: 'JSON'
    }).done(function (response) {
        if(response.status === 'ok'){
             $(location).attr('href', 'user');
        }
        else {

        }
    });
        

}

