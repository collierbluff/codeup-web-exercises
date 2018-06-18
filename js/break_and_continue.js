(function (){


    function isEven(input) {

        return input % 2 === 0;
    }






    var userNum;

    do{

        userNum = parseFloat(prompt("Please pick an odd number between 1 and 50"));

        if(isEven(userNum) || (userNum > 50) || (userNum < 1)){

            userNum = false;
        } else{break}

    }while (userNum === false);

    console.log("The number to skip is: " + userNum);

    for (var i = 1; i <= 50; i++) {

        if (i % 2 === 0) {

            continue;
        }

        if(i === userNum){

            console.log("We are skipping number: " + userNum);
            continue;
        }

        console.log('Here is an odd number: ' + i);
    }



})();