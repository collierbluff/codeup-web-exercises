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

//Function to scroll to an element's ID, takes a string

function scrollToID(id) {

    document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth'});

}

function makeObject(input) {

return {[input]: typeof input}

}

function anagram(a, b) {

    let strA = a.toLowerCase().split('').sort().join('');
    let strB = b.toLowerCase().split('').sort().join('');

    return strA === strB;

}

