$(document).ready(function() {

  $('.ui.modal').modal();

  $('#content h1').click(function(){
    $('#countDownModal').modal('show');
  });

  startCountdown(1552179600000);
  // $('#content h1').transition('set looping').transition('tada', '1500ms');
  $('#logoImage').hover(function(){
    $('#logoImage').transition('tada');
  });

  function startCountdown(countDownDate = 0) {

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      // document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ";

      document.getElementById("countD").innerHTML = days;
      document.getElementById("countH").innerHTML = hours;
      document.getElementById("countM").innerHTML = minutes;
      document.getElementById("countS").innerHTML = seconds;
      document.getElementById("countD2").innerHTML = days;
      document.getElementById("countH2").innerHTML = hours;
      document.getElementById("countM2").innerHTML = minutes;
      document.getElementById("countS2").innerHTML = seconds;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        // document.getElementById("countDown").innerHTML = "EXPIRED";
        document.getElementById("countD").innerHTML = 0;
        document.getElementById("countH").innerHTML = 0;
        document.getElementById("countM").innerHTML = 0;
        document.getElementById("countS").innerHTML = 0;
        document.getElementById("countD2").innerHTML = 0;
        document.getElementById("countH2").innerHTML = 0;
        document.getElementById("countM2").innerHTML = 0;
        document.getElementById("countS2").innerHTML = 0;
      }
    }, 1000);

  }

});
