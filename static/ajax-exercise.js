"use strict";


// PART 1: SHOW A FORTUNE
function getFortune (result) {
    var fortune = result;
    $('#fortune-text').html(fortune);
    console.log(fortune)
}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', getFortune)
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function dispWeather(result) {
    var weather = result;
    console.log(weather);
    $('#weather-info').html(weather['temp']);



}


function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
//weather.json?zipcode=90111
    $.get(url, dispWeather)

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
function showOrders (result) {

    var code = result["code"];
    var msg = result["msg"];
    console.log(code, msg);
    if (code == "ERROR"){
        
        $('#order-status').html(msg);
        $('#order-status').addClass('order-error');
    } else {
       $('#order-status').html(msg);     

    }

}

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
        "qty" : $("#qty-field").val(),
        "melon_type" : $("#melon-type-field").val()
    };

    $.post("/order-melons.json",
            formInputs,
            showOrders
            );
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


