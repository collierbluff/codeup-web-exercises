function sentenceLongWord(input) {

    let wordArray = input.split(" ");
    let longWord = wordArray.sort(function (a, b) {return b.length - a.length;})[0];
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
        let strArr = input.split(' ');

        for(let i = 0; i < strArr.length; i++){

            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }

    return strArr.join(' ');

}

function makeObject(input) {

return {[input]: typeof input}

}

function anagram(a, b) {

    let strA = a.toLowerCase().split('').sort().join('');
    let strB = b.toLowerCase().split('').sort().join('');

    return strA === strB;

}

