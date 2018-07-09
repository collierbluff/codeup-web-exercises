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

                $('#names-list').append('<li style = "color: ' + ele.favColor + '">' + ele.name + '</li>');

            });

    });


});