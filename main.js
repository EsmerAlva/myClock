$(document).ready(function() {

  //this var is added in step 9
  // Let's set the AM and PM meridiem for 12 hour format instead of 24 hour time
  var meridiem = "AM";  // Default is AM
  var colors = new Array();
  colors[0] = "#ff8e8e";
  colors[1] = "#ff8ea6";
  colors[2] = "#ff8ec2";
  colors[3] = "#ff8ee2";
  colors[4] = "#ff8efb";
  colors[5] = "#e48eff";
  colors[6] = "#d98eff";
  colors[7] = "#cf8eff";
  colors[8] = "#b38eff";
  colors[9] = "#9d8eff";
  colors[10] = "#8e9eff";
  colors[11] = "#8eaeff";
  colors[12] = "#8ebdff";
  colors[13] = "#8ecfff";
  colors[14] = "#8eddff";
  colors[15] = "#8eecff";
  colors[16] = "#8effff";
  colors[17] = "#8effea";
  colors[18] = "#8effd7";
  colors[19] = "#8effc2";
  colors[20] = "#8effae";
  colors[21] = "#8eff9e";
  colors[22] = "#93ff8e";
  colors[23] = "#aeff8e";
  colors[24] = "#c0ff8e";
  colors[25] = "#ceff8e";
  colors[26] = "#d9ff8e";
  colors[27] = "#e4ff8e";
  colors[28] = "#f1ff8e";
  colors[29] = "#fff98e";
  colors[30] = "#ffe88e";
  colors[31] = "#ffdd8e";
  colors[32] = "#ffcf8e";
  colors[33] = "#ffc48e";
  colors[34] = "#ffb98e";
  colors[35] = "#ffac8e";
  colors[36] = "#ff9b8e";
  colors[37] = "#ff8e8e";
  colors[38] = "#ffc6c6";
  colors[39] = "#ffd3c6";
  colors[40] = "#ffdbc6";
  colors[41] = "#ffe2c6";
  colors[42] = "#ffebc6";
  colors[43] = "#fff5c6";
  colors[44] = "#f6ffc6";
  colors[45] = "#dbffc6";
  colors[46] = "#c6ffc7";
  colors[47] = "#c6ffe0";
  colors[48] = "#c6fffa";
  colors[49] = "#c6f0ff";
  colors[50] = "#c6c7ff";
  colors[51] = "#d7c6ff";
  colors[52] = "#e4c6ff";
  colors[53] = "#e4c6ff";
  colors[54] = "#e4c6ff";
  colors[55] = "#f1c6ff";
  colors[56] = "#f1c6ff";
  colors[57] = "#f1c6ff";
  colors[58] = "#ffc6f4";
  colors[59] = "#ffc6e0";

  function displayTime() {
	   var currentTime = new Date();
	   var hours = currentTime.getHours();
	   var minutes = currentTime.getMinutes();
  	 var seconds = currentTime.getSeconds();
     // If the seconds digit is less than ten  (this code from step 8)

    document.body.style.backgroundColor = colors[seconds];

     if (seconds < 10) {
          // Add the "0" digit to the front
          // so 9 becomes "09"
        seconds = "0" + seconds;
     }
     // If the minutes digit is less than ten
     if (minutes < 10) {
          minutes = "0" + minutes;
     }
     // If the hours digit is less than ten
     if (hours < 10) {
          hours = "0" + hours;
     }
     //added in Step 9
     // Convert from 24 hour to 12 hour format and keep track of the meridiem.
    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }
    // 0 AM and 0 PM should read as 12
    if (hours === 0) {
        hours = 12;
    }

  // This gets a "handle" to the clock div in our HTML
  var clockDiv = document.getElementById('clock');

  // Then we set the text inside the clock div
  // to the hours, minutes, and seconds of the current time
  clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }  //end of displayTime() function

  /* This section used in step 3 - 6
  // This runs the displayTime function the first time
  displayTime();
  */

  //runs once a second aka 1000 milliseconds, added in step 7
  setInterval(displayTime, 1000);



});
