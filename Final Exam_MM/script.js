function getDate() {
  var bdayDate = new Date(document.getElementById("birthday").value).getTime();
  return bdayDate;
}

// start the countdown
 function start() {
 
  var bdayDate = getDate();

  var now = new Date();

  var timeDifference = bdayDate - now;
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  var dicsecs = Math.floor(0.1 * seconds);

  if(timeDifference > 0){
//display
document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;
document.getElementById("dicsecs").innerText = dicsecs;
  }
  

  if (timeDifference < 0) {
  
    document.getElementById("countdown").innerText = "Happy Birthday !!!";

    alert('Date is Expired');
    
    
    
  }
  
  // Set the date we're counting down to

  // Update the count down every 1 second

  // Get today's date and time

  // Find the distance between now and the count down date

  // Time calculations for days, hours, minutes and seconds

  // Output the result in an element with id="demo"

  // If the count down is over, write some text
}
setInterval("start()", 10);

