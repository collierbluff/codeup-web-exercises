"use strict";

( function (){

    function isEven(input) {

        return input % 2 === 0;
    }

    function showMultiplicationTable(input) {

        for(var i = 1; i <= 10; i++) {

            console.log(input + " x " + i + " = " + (input * i));
    }
}

showMultiplicationTable(5);

        for(var y = 0; y <= 10; y++){

            var random_num = Math.random() * (200 - 20) + 20;

            random_num = random_num.toFixed(0);
            if(isEven(random_num)){
                console.log(random_num + " is even");
            }else if (!isEven(random_num)){console.log(random_num + " is odd");}

        }



for(var i = 1; i <= 9; i++){

    i = i.toString();
    console.log(i.repeat(i));
}

for(var x = 100; x > 0; x = x -5){

    console.log(x);
}




})();