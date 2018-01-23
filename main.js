$( document ).ready(function() {
  $('#submit-btn').click(function(event) {
    event.preventDefault();
    // user types in city which is stored in the var called city
    var city = $("#city-type").val();
    $('#city-type').val('');
    city = city.toUpperCase();
    // if user types some variant of nyc show the nyc pic in background
    if (city === "NYC" || city === "NEW YORK CITY" || city === "NEW YORK") {
      $('body').css('background', 'url(images/nyc.jpg)');
      console.log(city);
    }
    // if user types LA show the LA pic in background
    else if (city === "LA" || city === "LOS ANGELES") {
      $('body').css('background', 'url(images/la.jpg)');
      console.log(city);
    }
    // if user types Austin show the Austin pic in background
    else if (city === "AUSTIN" || city === "ATX") {
      $('body').css('background', 'url(images/austin.jpg)');
      console.log(city);
    }
    // if user types sydney show them the syd pic
    else if (city === "SYDNEY" || city === "SYD") {
      $('body').css('background', 'url(images/sydney.jpg)');
      console.log(city);
    }
    // or give them an error message
    else {
			alert("Sorry, I don't know that city.");
		}
  });
});
