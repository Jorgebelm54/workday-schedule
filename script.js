var saveBtn = document.querySelector(".btn-primary");
var pageContentEl = document.querySelector

var d= new Date();
d.getFullYear();//Get the year as a four digit number (yyyy)
d.getMonth();//Get the month as a number (0-11)
d.getDate();//Get the day as a number (1-31)
d.getHours();//Get the hour (0-23)
d.getMinutes();//Get the minute (0-59)
d.getSeconds();//Get the second (0-59)
d.getMilliseconds();//Get the millisecond (0-999)
d.getTime();//Get the time (milliseconds since January 1, 1970)

var taskButtonHandler= function(event) {
  console.log(event.target.id);
  var inputContent = document.getElementById("input-" + event.target.id).value;
  var inputDate=document.getElementById("meeting").value;
  var timeofday=document.getElementById("12AM").value;
  console.log(inputContent);
   localStorage.setItem('date',inputDate);
   localStorage.setItem('time',timeofday);
  localStorage.setItem('content', inputContent);
  var stuffWeGot = localStorage.getItem('content');
  console.log(stuffWeGot)
};

  saveBtn.addEventListener("click", taskButtonHandler);
 













//  var date =document.getElementById("date").value;

// var hourBlock =document.getElementById("hourBlock").value;

// var content =document.getElementById("content").value;
// var saveBtn = document.querySelector('.btn');


//   saveBtn.addEventListener("click", function(event) {
//   console.log('test');
// })

// (function () {
//   console.log('TEST')
// })()