$(document).ready(function () {

    $('#addTripBtn').on('click', addTrip);

    var username;

    $.getJSON('/user/username', function(data) {

        username = data.name;

        var heading = document.getElementById('welcomeHeader');

        heading.innerHTML = heading.textContent + " " + username;

    });

});

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
    var size = $("grpSize").val();
    var activity = $("grpAct").val();
    //--------
    var busTKNumber = $("busTKT").val();
    var busPrice = $("busPrice").val();

    var crusieTKNumber = $("cruiseTKT").val();
    var cruisePrice = $("cruisePrice").val();

    var flightTKNumber = $("flightTKT").val();
    var flightPrice = $("flightPrice").val();

    var carVIN = $("carVIN").val();
    var carPrice = $("carPrice").val();

    //ACCOMMODATION
    var placeName = $("placeName").val();
    var discount = $("disc").val();
    var ratePerNight = $("rate").val();
    var accommodatioType = $("accType").val();

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
        'cruiseTKNumber': crusieTKNumber,
        'cruisePrice': cruisePrice,
        'flightTKNumber': flightTKNumber,
        'flightPrice': flightPrice,
        'carVIN': carVIN,
        'carPrice': carPrice
    }



    






    
}