

(function(){


    let sampleString = "Test+Case";

    let stringARay = sampleString.split("");

    // console.log(stringARay);


stringARay.forEach(function (stringChar, index) {

    if (stringChar === stringChar.toUpperCase()){

        stringARay[index] = stringChar.toLowerCase();
    }

    else if (stringChar === stringChar.toLowerCase()){

        stringARay[index] = stringChar.toUpperCase();

    }

});

    // console.log(stringARay);


function checkStrNum(string) {

    let strAR = string.split("");

    if(strAR.length === parseFloat(strAR[strAR.length - 1])){

        console.log("Yup");
    }
}


checkStrNum("Tests6");












})();