// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Today's current day is displayed at the top of the daily planner.
var date = new Date();
    // displays the current day in the calendar
    $('#currentDay').text((date.getMonth()+1) + '-' + (date.getDate())  + '-' + (date.getFullYear()) + ' ');

// displaying a functioning clock
function currentTime() {
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

     hours = (hours < 10) ? "0" + hours : hours;
     minutes = (minutes < 10) ? "0" + minutes : minutes;
     seconds = (seconds < 10) ? "0" + seconds : seconds;
      
     let time = hours + ":" + minutes + ":" + seconds + " ";
  
    document.getElementById("currentTime").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();