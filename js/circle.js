(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // complete this method
            // hint: area = pi * radius^2

            return ((Math.pow(this.radius, 2)) * Math.PI);
        },

        logInfo: function (doRounding) {
            // complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if(doRounding === true){
                console.log(Math.round(this.getArea()));
                return;
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // Change the radius of the circle to 5.
circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
