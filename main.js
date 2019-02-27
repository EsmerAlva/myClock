$(document).ready(function() {

  //this var is added in step 9
  // Let's set the AM and PM meridiem for 12 hour format instead of 24 hour time
  var meridiem = "AM";  // Default is AM
  var colors = new Array();
  colors[0] = "#262626";
  colors[1] = "#2b2b2b";
  colors[2] = "#2d2d2d";
  colors[3] = "#353535";
  colors[4] = "#3d3d3d";
  colors[5] = "#424242";
  colors[6] = "#4f4f4f";
  colors[7] = "#595959";
  colors[8] = "#606060";
  colors[9] = "#6d6d6d";
  colors[10] = "#757575";
  colors[11] = "#828282";
  colors[12] = "#8e8e8e";
  colors[13] = "#a3a3a3";
  colors[14] = "#afafaf";
  colors[15] = "#b7b7b7";
  colors[16] = "#c4c4c4";
  colors[17] = "#cecece";
  colors[18] = "#dbdbdb";
  colors[19] = "#eaeaea";
  colors[20] = "#efefef";
  colors[21] = "#f7f7f7";
  colors[22] = "#edf2f1";
  colors[23] = "#e3f2ef";
  colors[24] = "#d9f7f1";
  colors[25] = "#c9f2ea";
  colors[26] = "#bdefe5";
  colors[27] = "#afeade";
  colors[28] = "#9ee5d7";
  colors[29] = "#8cd8c9";
  colors[30] = "#75c6b6";
  colors[31] = "#67b5a5";
  colors[32] = "#5aa898";
  colors[33] = "#4c9989";
  colors[34] = "#3b8475";
  colors[35] = "#2f7769";
  colors[36] = "#246659";
  colors[37] = "#1e6053";
  colors[38] = "#18594c";
  colors[39] = "#145649";
  colors[40] = "#0f4f42";
  colors[41] = "#0b4f41";
  colors[42] = "#084c3e";
  colors[43] = "#054437";
  colors[44] = "#023f33";
  colors[45] = "#003a2f";
  colors[46] = "#00323d";
  colors[47] = "#01343f";
  colors[48] = "#033f4c";
  colors[49] = "#064856";
  colors[50] = "#0e5666";
  colors[51] = "#155563";
  colors[52] = "#174d59";
  colors[53] = "#1a4b56";
  colors[54] = "#1b4954";
  colors[55] = "#1d3f47";
  colors[56] = "#1e3d44";
  colors[57] = "#213c42";
  colors[58] = "#1f3338";
  colors[59] = "#1e2c30";

  function displayTime() {
	   var currentTime = new Date();
	   var hours = currentTime.getHours();
	   var minutes = currentTime.getMinutes();
  	 var seconds = currentTime.getSeconds();
     // If the seconds digit is less than ten  (this code from step 8)

    document.body.style.backgroundColor = colors[seconds];

     if (seconds < 5) {
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
