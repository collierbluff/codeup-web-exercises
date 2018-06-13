(function(){

"use strict";

/*
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


function sayHello(name) {

    return "Hello, " + name + "!";
}

/* Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello('Collier');
    // console.log(helloMessage);



/*
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Collier";
console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/*
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(random){

    // console.log(random);
    return (random === 2);
}

var result = isTwo(random);

console.log(result);


/*
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */


function calculateTip(tip_percent, bill_total){

    return tip_percent * bill_total;
}

console.log(calculateTip(.20, 20));


/*
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var bill_total = Number(prompt("What is your bill total?"));
var tip_percent = Number(prompt("How much would you like to tip? (Use a decimal percentage)"));

alert("You should Tip $" + calculateTip(bill_total, tip_percent).toFixed(2) + " Dollars");

/*
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(price, discount_percent){

    var discount = price * discount_percent;

    return price - discount;
}

console.log(applyDiscount(39.99, .2).toFixed(2));

//End of IIFE

})();

"use strict";
//Simple Function Drills

function returnTwo() {
    return 2;
}

// console.log(returnTwo());

function returnName() {

    return "Collier";
    
}

// console.log(returnName());

function addThree(number) {
    return number + 3;
}

// console.log(addThree(5));

function sayString(string) {
    return string;
}

// console.log(sayString("test"));

function sayHowdy() {

    console.log("Howdy!");
    
}

// sayHowdy();

//Challenge Function Drills

function identity(input) {

    return input;
}

function getRandomNumber(min, max) {

    return Math.random() * (max - min) + min;
}

// console.log(getRandomNumber(3, 10));

function first(input) {

    return input.charAt(0);
}

// console.log(first("Sample"));

function last(input) {

    return input.charAt(input.length - 1);
}

// console.log(last("Sample"));

function rest(input) {

    return input.slice(1);
}

// console.log(rest("Sample"));

function reverse(input){

    var split = input.split("");
    var reverse = split.reverse();
    return reverse.join("");
}

// console.log(reverse("Sample"));

function isNumeric(input){

    return typeof input === "number";
}

// console.log(isNumeric("63771"));

function count(input){

    return input.length;
}

// console.log(count("Test.txt"));

function add(a, b){

    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {

    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {

    return parseInt(a) * parseInt(b);
}

function divide(numerator, denominator) {

    return parseInt(numerator) / parseInt(denominator);
}

function remainder(number, divisor) {

    return parseInt(number) % parseInt(divisor);
}

function square(a){

    return parseInt(a) * parseInt(a);
}

//Gold Star Drills

function sumOfSquares(a, b) {

   var a_sq = square(a);
    var b_sq = square(b);
    return add(a_sq, b_sq);
}

// console.log(sumOfSquares(5, 3));

function doMath(operator, a, b) {

    if (operator === add){
        return add(a, b);
    }

    else if (operator === subtract){
        return subtract(a, b);
    }

    else if (operator === multiply){
        return multiply(a, b);
    }

    else if (operator === divide){
        return divide(a, b);
    }

    else if (operator === remainder){
        return remainder(a, b);
    }

    else {
        return "Oh no! Something went wrong!";
    }
}