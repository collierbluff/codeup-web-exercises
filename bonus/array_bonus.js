

(function(){


    var sampleString = "Test+Case";

    var stringARay = sampleString.split("");

    console.log(stringARay);


stringARay.forEach(function (stringChar, index) {

    if (stringChar === stringChar.toUpperCase()){

        stringARay[index] = stringChar.toLowerCase();
    }

    else if (stringChar === stringChar.toLowerCase()){

        stringARay[index] = stringChar.toUpperCase();

    }

});

    // console.log(stringARay);

















})();