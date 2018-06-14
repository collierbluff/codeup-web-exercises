"use strict";

/*
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

function isEven(num){

    return num % 2 === 0;
}

// var number_question = confirm("Would you like to enter a number?");
//
// if (number_question === true){
//
//     var number = Number(prompt("What's the Number?"));
//
//     if (number + Infinity !== Infinity){
//
//         alert("That's not a Number!");
//     }
//
//     else{
//
//         console.log(number);
//
//         if(isEven(number)){
//             alert("That number is Even!")
//         }
//         else {
//             alert("That number is Odd!")
//         }
//
//         alert("That number plus 100 is " + (number + 100) + "!");
//
//         if (number < 0){
//             alert("That number is Negative!");
//         }
//         else if (number === 0){
//             alert("That number is Zero!");
//         }
//         else {
//             alert("That number is Positive!");
//         }
//     }
// }



/*
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(colorName) {

    colorName = colorName.toLowerCase();

    if (colorName === "blue"){
        return "Blue is pretty cool, it's the color of the sky and water";
    }

    else if (colorName === "red"){
        return "Red is pretty cool, it's the color of apples and fast cars";
    }

    else if (colorName === "yellow"){
        return "Yellow is pretty cool, it's the color of bananas and school buses";
    }

    else if (colorName === "purple"){
        return "Purple is pretty cool, It's the color of grapes and violets"
    }
    else{
        return "I don't know anything about " + colorName;
    }
}

// console.log(analyzeColor("blue"));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/*
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// console.log(analyzeColor(randomColor));


/*
 * Refactor your above function to use a switch-case statement
 */

// var colorName = randomColor;

// switch (colorName){
//     case 'blue':
//         console.log("Blue is pretty cool, it's the color of the sky and water");
//         break;
//     case 'red':
//         console.log("Red is pretty cool, it's the color of apples and fast cars");
//         break;
//     case 'yellow':
//         console.log("Yellow is pretty cool, it's the color of bananas and school buses");
//         break;
//     case 'purple':
//         console.log("Purple is pretty cool, It's the color of grapes and violets");
//         break;
//     default:
//         console.log("I don't know anything about " + colorName);
//         break;
// }

/*
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var colorName = prompt("Pick a Color:");
//
// alert(analyzeColor(colorName));


/*
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luck_number, total_amount){

    if (luck_number === 0){
        return total_amount;
    }

    else if (luck_number === 1){
        return total_amount - (total_amount * .1);
    }

    else if (luck_number === 2){
        return total_amount - (total_amount * .25);
    }
    else if (luck_number === 3){
        return total_amount - (total_amount * .35);
    }
    else if (luck_number === 4){
        return total_amount - (total_amount * .5);
    }
    else if (luck_number === 5){
        return 0;
    }
}

// console.log(calculateTotal(3, 100));

/*
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 5

// var luckyNumber = Math.floor(Math.random() * 5);
//
// var total_price = prompt("What was your total bill?");
//
// alert("Your lucky number was " + luckyNumber + "!");
//
// alert("Your price before discount was: " + total_price + ".");
//
// alert("And your price after discount is " + calculateTotal(luckyNumber, total_price) + "!");
