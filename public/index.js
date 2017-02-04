$(document).ready(function(){

$("#add-btn").on("click", function(event) {
  event.preventDefault();

  console.log("hey you jude");

  var car = {
  
    company: $("#company").val().trim(),

    make: $("#car").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", car)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      var new_data= JSON.stringify(data); 
      $(".results").html("");           
      $(".results").append(new_data);

      // tell the user we're adding a character with an alert window
    });

  // empty each input box by replacing the value with an empty string
  $("#company").val("");
  $("#car").val("");


});

});