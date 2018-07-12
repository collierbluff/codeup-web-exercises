

let dog = {

  breed: "Mutt",
  weightInPounds: 50,
  age: 3,
  color: "Darkness",
  sterilized: true,
  shotRecords: [

      {
          typeOfShot: "Plague",
          date: 2018
      },
      {
          typeOfShot: "Cholera",
          date: 2017
      },
      {
          typeOfShot: "Rabies",
          date: 2016
      }
  ],
    bark: function(){console.log("Woof!");},
    getOlder: function(){this.age += 1;},
    fix: function () {
        if(this.sterilized === false){
            this.sterilized = true;
        }
    },
    vaccinate: function (name, year) {
        this.shotRecords.push({typeOfShot: name, date: year});
    }

};