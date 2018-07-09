"use strict";

$(document).ready(function(){

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    $('#add-names-btn').click(function () {

        $('#names-list').html('');
            people.forEach(function (ele) {

                $('#names-list').append('<li>' + ele.name + '</li>');

            });

            $('li').each(function (index) {
                $(this).css('color', people[index].favColor);
            })

    });


});