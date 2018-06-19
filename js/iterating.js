(function(){
    "use strict";

    /*
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Bob", "Bill", "Steven", "Daniel"];

    /*
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);



    /*
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    /*
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(var i = 0; i < names.length; i++){

        console.log(names[i]);
    }



    /*
     * Refactor your above code to use a `forEach` loop
     */

    function displayInput(input) {

        console.log(input);
    }

    names.forEach(displayInput);



    /*
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(a_ray){

        return a_ray[0];
    }

    function second(a_ray){

        return a_ray[1];
    }

    function last(a_ray){

        return a_ray[a_ray.length - 1];
    }

    console.log(first(names));
    console.log(second(names));
    console.log(last(names));


})();
