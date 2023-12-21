//    Lab 1

let slideIndex = 1;
  function changeSlide(n) {
    let i=0;
    let slides = document.getElementsByClassName("images");
    let dots = document.getElementsByClassName("dot");

    // If the specified slide index is greater than the total number of slides, set the slide index to 1
    if (n > slides.length) {
      slideIndex = 1;
    }
    // If the specified slide index is less than 1 , then repeat the slides
    if (n < 1) {
      slideIndex = slides.length;
    }
    //hide all the slides and to be not displayed at the top of each other
    
    for (i ; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // remove the active dot
    for (i; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
  }
  changeSlide(slideIndex);
  

  function plusSlides(n) {
    changeSlide(slideIndex += n);
   
  }
  function slide(n) {
      changeSlide(slideIndex = n);
    }

    // ___________________________________________________________________________________________

    // Lab 2
   
//     let alarmTime;
//     let alarmTimeOut;
//     const display = document.getElementById("clock");

//     function time() {
//         const date = new Date();
//         const hour = date.getHours();
//         const minute = date.getMinutes();
//         const second = date.getSeconds();
//         display.innerHTML = `${hour} : ${minute} : ${second}`;
//     }
//     setInterval(time, 1000);

//    function setAlarmTime(value) {
//     alarmTime = value;
//     console.log(alarmTime);
//    }

//    function setAlarm(){
//     if (alarmTime) {
//         const current = new Date();
//         const newAlarm = new Date(alarmTime);
//         if(newAlarm > current) {
//             const timeout = newAlarm.getTime() - current.getTime();
//             alarmTimeOut = setTimeout(() => {
//                 alert('Alarm Ringing!'); 
//                 document.getElementById("alarmStatus").innerHTML = "Not set";
//             }, timeout);

//         }
//     }
//     document.getElementById("alarmStatus").innerHTML = isAlarmSet() ? "Set" : "Not set";
// }
//  function isAlarmSet() {
//     return alarmTime !== null;
// }
// function clearAlarm() {
//     clearTimeout(alarmTimeOut); 
//     alarmTime = null; // Reset the alarm time
//     document.getElementById("alarmStatus").innerHTML = isAlarmSet() ? "Set" : "Not set";

// }