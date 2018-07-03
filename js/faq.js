
$(function() {

    //Function to make filler FAQ objects

    function padArray(array, desiredLength, filler) {

        while (array.length < desiredLength) {

            array.push(filler)
        }
    }

    //Initialize FAQ Array

    var parks = [];

    padArray(parks, 10, {question: 'Question', answer: 'Answer'});

    //Render FAQ Array

    var html = '';

    parks.forEach(function (park, index) {
        html += '<dt>' + parks[index].question + '</dt>' +
            '<dd class = \'invisible\'>' + parks[index].answer + '</dd>';
    });

    $('dl').html(html);

    //Initialize Yellowstone Array

    var yellowstone = [{fact: 'Yellowstone National Park'}];

    padArray(yellowstone, 5, {fact: 'Yellowstone fact?'});

    //Render Yellowstone Array

    html = "";

    yellowstone.forEach(function (object, index) {
        if(index === 0){
            html += '<h3><li>' + object.fact + '</li></h3>'

        }else{html += '<li>' + object.fact + '</li>';}
    });

    $('#yellowstone').html(html);

    //Initialize Yosemite Array

    var yosemite = [{fact: 'Yosemite National Park'}];

    padArray(yosemite, 5, {fact: 'Yosemite fact?'});

    //Render Yosemite Array

    html = "";

    yosemite.forEach(function (object, index) {
        if(index === 0){
            html += '<h3><li>' + object.fact + '</li></h3>'

        }else{html += '<li>' + object.fact + '</li>';}
    });

    $('#yosemite').html(html);

    //Initialize Theodore Roosevelt Array

    var theoR = [{fact: 'Theodore Roosevelt National Park'}];

    padArray(theoR, 5, {fact: 'Theodore Roosevelt fact?'});

    //Render Theodore Roosevelt Array

    html = "";

    theoR.forEach(function (object, index) {
        if(index === 0){
            html += '<h3><li>' + object.fact + '</li></h3>'

        }else{html += '<li>' + object.fact + '</li>';}
    });

    $('#theoR').html(html);

    //Toggle Answer Button

    $('#answer').click(function () {

        $('dd').toggleClass('invisible');

        if ($(this).text() === 'Would You Like Answers?') {

            $(this).text('There are your answers!');
        }

        else {
            $(this).text('Would You Like Answers?')
        }
    });

    //Yellow Highlight Toggle Button

    $('#yellow-bg').click(function () {

        $('#yellowstone').children().last().toggleClass('highlight').css('display', 'inline');
        $('#yosemite').children().last().toggleClass('highlight').css('display', 'inline');
        $('#theoR').children().last().toggleClass('highlight').css('display', 'inline');

        if ($(this).text() === 'Highlighter') {

            $(this).text('Undo that Highlight');
        }

        else {
            $(this).text('Highlighter')
        }

    });

    //Make h3s add bold to li's

    $('h3').click(function () {

        $(this).parent().children().next().toggleClass('bold');
    });

    //make li's turn li's blue

    $('li').click(function () {

        $(this).parent().children().first().next().toggleClass('blue');
    });

    //Toggles DT Highlight Color

    $('dt').click(function () {
        $(this).toggleClass('highlight');
    })

})();