
(function() {

    //Function to fill arrays

    function padArray(array, desiredLength, filler) {

        while (array.length < desiredLength) {

            array.push(filler)
        }
    }

    //Initialize FAQ Array and fill it

    var parks = [];

    padArray(parks, 10, {question: 'Question', answer: 'Answer'});

    //Render FAQ Array

    var html = '';

    parks.forEach(function (park, index) {
        html += '<dt>' + parks[index].question + '</dt>' +
            '<dd class = \'invisible\'>' + parks[index].answer + '</dd>';
    });

    $('dl').html(html);

    //Initialize Yellowstone Array and fill it

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

    //Initialize Yosemite Array and fill it

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

    //Initialize Theodore Roosevelt Array and fill it

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

    //Highlight Toggle Button

    $('#highlight-bg').click(function () {

        $('ul').each(function () {
            $(this).children().last().toggleClass('highlight');
        });

        if ($(this).text() === 'Highlighter') {

            $(this).text('Undo that Highlight!');
        }

        else {
            $(this).text('Highlighter')
        }

    });
    //make li's turn li's blue

    $('li').click(function () {

        $(this).parent().children().first().next().toggleClass('blue');
    });

    //Toggles DT Highlight Color

    $('dt').click(function () {
        $(this).toggleClass('highlight').css('clear', 'both').css('float', 'left');
    });

    //Close Pop-up

    $('#cancel').click(function () {
       $('#pop-up').first().hide();
    });

    //Hide li's to start

    $('ul').each(function () {
        $(this).children().next().hide();
    });

    //Make h3s reappear li's and bold them

    $('h3').click(function () {

        $(this).parent().children().toggleClass('bold').slideDown();
    });

    //Hide h2 to start

    $('h2').hide();

    //Make the h2 appear after 8 seconds

    window.setTimeout(function () {
        $('h2').fadeIn();
    }, 8000)


})();