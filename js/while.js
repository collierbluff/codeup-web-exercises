"use strict";

( function (){


    var num = 2;
    var x = 0;

    while(x<16){

    console.log(num);
    num = (num * 2);

    x++;

    }


    var allCones = Math.floor(Math.random() * 50) + 50;

    while (allCones > 0){

        var sold = Math.floor(Math.random() * 5) + 1;

        if(sold > allCones){

            console.log("I can't sell you " + sold + " cones I only have " + allCones);
            sold = 0;
        }else {console.log(sold + " Cones sold...");}

        allCones -= sold;
    }

    console.log("Yay! I sold them all!")



})();


