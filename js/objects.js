(function() {
    "use strict";

    /*
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {

        firstName: "Collier",
        lastName: "Bluff"
    };

    // console.log(person);


    /*
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {

            return ("Hello from " + this.firstName + " " + this.lastName + "!");
    };

    console.log(person.sayHello());

    /*
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (value){

        if (value.amount <= 200){
            console.log(value.name + " Cost: " + value.amount.toFixed(2));
        }else{
         console.log(value.name + " Initial Total: " + value.amount + " Discount: " + (value.amount * .12).toFixed(2) +" Cost: "+ (value.amount - (value.amount * .12)).toFixed(2));
        }
    });


    /*
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    let theHobbit = {

        title: "The Hobbit", author: {firstName: "John", lastName: "Tolkien"}
    };

    let crystalShard = {

        title: "The Crystal Shard", author: {firstName: "Robert", lastName: "Salvatore"}
    };

    let homeland = {

        title: "Homeland", author: {firstName: "Robert", lastName: "Salvatore"}
    };

    let wizards = {

        title: "Wizard's First Rule", author: {firstName: "Terry", lastName: "Goodkind"}
    };

    let ender = {

        title: "Ender's Game", author: {firstName: "Orson", lastName: "Card"}
    };

let books = [theHobbit, crystalShard, homeland, wizards, ender];



    /*
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (value, index) {

        console.log(
            "Book # "+ (index + 1) + "\n" + "Title: " + books[index].title + "\n" +"Author: "
            + books[index].author.firstName + " " + books[index].author.lastName
        );
    });

    /*
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(title, authorName) {

        let name = authorName.split(" ");

        let first = name[0];
        let last = name[1];

        return {title: title, author: {firstName: first, lastName: last}};
    }

})();
