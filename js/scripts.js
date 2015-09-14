$(document).ready(function(event) {
  var placeYouveBeen = function(country, city, landmarks,  timeOfYear, notes){

   var  place =
      {country: country,
          city: city,
          landmarks: [],
          timeOfYear: timeOfYear,
          notes: ""
      };
    return place;
  };

$("form#add-place").submit(function(event) {
  event.preventDefault();

  var newCountry = $("input#country").val();
  var newCity = $("input#city").val();
  var newTimeOfYear = $("input#timeOfYear").val();
  var newNotes = $("textarea#notes").val();

  var newPlace = placeYouveBeen(newCountry, newCity, newTimeOfYear);
  newPlace.notes = newNotes;
  // debugger;


  $("#places").append("<li><span class='clickedPlace'>" + newPlace.country + ", " + newPlace.city +"</span></li>");

    debugger;


  $("input#country").val("");
  $("input#city").val("");
  $("input#timeOfYear").val("");
  $("input#landmarks").val("");
  $("textarea#notes").val("");


  $(".clickedPlace").last().click(function() {
    $("#place").show();
    $("#place").append(newPlace.city + ", " + newPlace.country + " " + newPlace.timeOfYear + " " + newPlace.notes)
  });
});


});
