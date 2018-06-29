
$('h1').click(function () {
   $(this).css('background-color', '#bada55');
});

$('p').dblclick(function () {
    $(this).css('font-size', '18px');
});

$('li').hover(function () {
    $(this).css('color', 'red');
}, function () {
    $(this).css('color', 'black');
});