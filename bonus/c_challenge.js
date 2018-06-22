function sentenceLongWord(input) {

    var wordArray = input.split(" ");
    var longWord = wordArray.sort(function (a, b) {return b.length - a.length;})[0];
    return longWord.length;
}

function mathBoolean(a, b, c) {

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    return (a * a) + (b * b) === (c * c);

}

function titleCase(input){

        input = input.toLowerCase();
        var strArr = input.split(' ');



        for(var i = 0; i < strArr.length; i++){

            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);


    }

    return strArr.join(' ');

}

function makeObject(input) {

    if (typeof input === 'string'){

        return {input: "string"};
    }else if (typeof input === 'number'){

        return {input: "number"};
    }else if (typeof input === 'boolean'){
        return {input: "boolean"};
    }
}

function anagram(a, b) {

    var strA = a.toLowerCase().split('').sort().join('');
    var strB = b.toLowerCase().split('').sort().join('');

    return strA === strB;

}

