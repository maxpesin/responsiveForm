// initiate after dom loaded
$( document ).ready(function() {
  // initiate function when clicking submit
  $('#submit').click(function() {
    var count = 0;
    var i;
    var reqFields = $('.form-error');
    // loop through required fields
    for(i = 0; i < reqFields.length; i++) {
      var req = reqFields[i];
      // show required field if criteria isn't met
      if (req.nextElementSibling.value == "" || req.nextElementSibling.value == " ") {
      req.style.visibility = "visible";
      count++;
      // hide required fields if criteria is met
      } else {
      req.style.visibility = "hidden";
      count - 1;
      }
    }
    // validate required fields for thank you page
    if (count == 0) {
      $('.thank-you')[0].style.visibility = 'visible';
      $('.main-content')[0].style.display = 'none';
      $('.side-pane')[0].style.display = 'none';
    }
  });
  // initiate page refresh when clicking restart
  $('#restart').click(function() {
    location.reload();
  })
});