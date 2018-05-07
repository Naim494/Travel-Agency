$(document).ready(function () {

    populateTable();
    populateUsersTable();
    populateReviewTable();

    $('#addTripBtn').on('click', addTrip);

    $('#addPaymentBtn').on('click', addPayment);

    $('#addReviewBtn').on('click', addReview);

    $('#usersTableBody').on('click', 'td a.linkdeleteuser', deleteUser);

    var username;
    var userTripData;

    $.getJSON('/user/username', function (data) {

        username = data.name;

        var heading = document.getElementById('welcomeMsg');

        heading.innerHTML = heading.textContent + " " + username;

    });

});

$(document).ready(function () {
    $('.leftmenutrigger').on('click', function (e) {
        $('.side-nav').toggleClass("open");
        e.preventDefault();
    });
});

function populateReviewTable() {

    // Empty content string
    var tableContent = '';

    $.getJSON('/getReviews', function (data) {
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function () {
            tableContent += '<tr>';
            tableContent += '<td>' + this.username + '</td>';
            tableContent += '<td>' + this.reviewText + '</td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#reviewsTableBody').html(tableContent);

    });

}

function populateUsersTable() {

    // Empty content string
    var tableContent = '';

    $.getJSON('/user/getUsers', function (data) {
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function () {
            tableContent += '<tr>';
            tableContent += '<td>' + this.first + '</td>';
            tableContent += '<td>' + this.last + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this.ID + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#usersTableBody').html(tableContent);

    });

}

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    $.getJSON('/getUserTrips', function (data) {

        // Stick our user data array into a userlist variable in the global object
        userTripData = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function () {
            tableContent += '<tr>';
            tableContent += '<td>' + this.tripID + '</td>';
            tableContent += '<td>' + this.source + '</td>';
            tableContent += '<td>' + this.destination + '</td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#tableBody').html(tableContent);

    });
};

function addTrip(event) {

    //SOURCE 
    var sourceCountry = $("#srcCntry").val();
    var sourceState = $("#srcSt").val();
    var sourceCity = $("#srcCty").val();
    var sourceDate = $("#srcDate").val();
    var sourceTime = $("#srcTime").val();

    //DEST
    var destCountry = $("#destCntry").val();
    var destState = $("#destSt").val();
    var destCity = $("#destCty").val();
    var destDate = $("#destDate").val();
    var destTime = $("#destTime").val();

    //TRAVEL TYPE
    var purpose = $("#grpPurpose").val();
    var size = $("#grpSize").val();
    var activity = $("#grpAct").val();
    //--------
    var busTKNumber = $("#busTKT").val();
    var busPrice = $("#busPrice").val();

    var cruiseTKNumber = $("#cruiseTKT").val();
    var cruisePrice = $("#cruisePrice").val();
    var cruiseNumber = $("#cruiseNumber").val();
    var cruiseClass = $("#cruiseClass").val();


    var flightTKNumber = $("#flightTKT").val();
    var flightPrice = $("#flightPrice").val();
    var flightNumber = $("#flightNumber").val();
    var flightClass = $("#flightClass").val();

    var carVIN = $("#carVIN").val();
    var carPrice = $("#carPrice").val();
    var carType = $("#carType").val();

    //ACCOMMODATION
    var placeName = $("#placeName").val();
    var discount = $("#disc").val();
    var ratePerNight = $("#rate").val();
    var accommodationType = $("#accType").val();

    var tripData = {
        'sourceCountry': sourceCountry,
        'sourceState': sourceState,
        'sourceCity': sourceCity,
        'sourceDate': sourceDate,
        'sourceTime': sourceTime,
        'destCountry': destCountry,
        'destState': destState,
        'destCity': destCity,
        'destDate': destDate,
        'destTime': destTime,
        'purpose': purpose,
        'size': size,
        'activity': activity,
        'busTKNumber': busTKNumber,
        'busPrice': busPrice,
        'cruiseTKNumber': cruiseTKNumber,
        'cruisePrice': cruisePrice,
        'cruiseNumber': cruiseNumber,
        'cruiseClass': cruiseClass,
        'flightTKNumber': flightTKNumber,
        'flightPrice': flightPrice,
        'flightNumber': flightNumber,
        'flightClass': flightClass,
        'carVIN': carVIN,
        'carPrice': carPrice,
        'carType': carType,
        'placeName': placeName,
        'discount': discount,
        'ratePerNight': ratePerNight,
        'accommodationType': accommodationType
    }

    $.ajax({
        type: 'POST',
        data: tripData,
        url: '/addTrip',
        dataType: 'JSON'
    }).done(function (response) {

    });


}

function addPayment(event) {

    var creditCardNum = $("#creditCardNum").val();
    var securityNum = $("#securityNum").val();
    var expDate = $("#expDate").val();

    var newPayment = {
        'cardNum': creditCardNum,
        'secNum': securityNum,
        'expDate': expDate
    }

    $.ajax({
        type: 'POST',
        data: newPayment,
        url: '/addPayment',
        dataType: 'JSON'
    }).done(function (response) {

    });

}

function addReview(event) {

    var reviewTxt = $("#reviewTxt").val();

    var newReview = {
        'reviewTxt': reviewTxt
    }

    $.ajax({
        type: 'POST',
        data: newReview,
        url: '/addReview',
        dataType: 'JSON'
    }).done(function (response) {

    });
}

function deleteUser(event) {

    event.preventDefault();

    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/user/deleteUser/' + $(this).attr('rel')
        }).done(function (response) {

            // Check for a successful (blank) response
            if (response.msg === 'ok') {

            }
            else {
                alert('ERROR: ' + response.msg);
            }

            populateUsersTable();
            populateReviewTable();
        });
    }
    else {

        // If they said no to the confirmation, do nothing
        return false;
    }

}