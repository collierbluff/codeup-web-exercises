"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var color = prompt("What's your favorite color?");

alert('Great, ' + color + ' is my favorite color too!');


// // Exercise 3 from the last lesson, use prompt for numbers and alert for each result


// //Movie Rental Exercise

var mermaid_time = prompt("How many days are you renting The Little Mermaid for?");
var brother_bear_time = prompt("How many days are you renting Brother Bear for?");
var herc_time = prompt("How many days are you renting Hercules for?");
var rental_price = prompt("How much money does your rental store charge you per day?");

alert('Understood, it\'ll cost you '+ (parseInt(mermaid_time) + parseInt(brother_bear_time) + parseInt(herc_time)) * parseInt(rental_price));

// //Income Exercise

var google_pay = prompt("How much does Google pay you?");
var google_hours = prompt("How many hours did you work for Google?");

var amazon_pay = prompt("How much does Amazon pay you?");
var amazon_hours = prompt("How many hours did you work for Amazon?");

var facebook_pay = prompt("How much does Facebook pay you?");
var facebook_hours = prompt("How many hours did you work for Facebook?");

alert('Congrats! you made ' + (parseInt((parseInt(google_pay) * parseInt(google_hours))) + parseInt((parseInt(amazon_pay) * parseInt(amazon_hours))) + parseInt(parseInt(facebook_pay) * parseInt(facebook_hours)) ) + ' dollars!');

// //Join Class Exercise

var class_has_room = prompt("Does this class have space for you? (Please Enter Either 'Yes' or 'No'");

class_has_room = class_has_room.toLowerCase();

if (class_has_room == "yes"){
    class_has_room = true;
}

else if (class_has_room == "no"){
    class_has_room = false;
}

var open_schedule = prompt("Is your schedule open? (Please Enter Either 'Yes' or 'No'");

open_schedule = open_schedule.toLowerCase();

if (open_schedule == "yes"){
    open_schedule = true;
}

else if (open_schedule == "no"){
    open_schedule = false;
}

// Evaluate Input

if ((open_schedule && class_has_room) == true){

    alert('Congrats! you\'re in the class!');
}

else if((open_schedule && class_has_room) == false){

    alert('Sorry you aren\'t eligible, try again later.');
}

else{
    alert('Oh no, Something went wrong!');
}


//Premium Deals Exercise

var offer_num = parseInt(prompt("How many items do you need to qualify for the sale?"));
var offer_has_expired = prompt("Has this offer expired? (Please Enter Either 'Yes' or 'No'");
var order_num = parseInt(prompt("How many are you buying?"));
var premium = prompt("Are you a premium member? (Please Enter Either 'Yes' or 'No'");

premium = premium.toLowerCase();
offer_has_expired = offer_has_expired.toLowerCase();


if (premium == "yes"){
    premium = true;
}

else if (premium == "no"){
    premium = false;
}

if (offer_has_expired == "yes"){
    offer_has_expired = true;
}

else if (offer_has_expired == "no"){
    offer_has_expired = false;
}

if ((order_num >= offer_num || premium == true) && !offer_has_expired){

    alert('Congrats! You Qualify for Awesome Deals!');
}

else {
    alert('What a shame, you don\'t qualify...');

}