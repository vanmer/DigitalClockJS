// window.addEventListener('load', () => {
//   console.log("hola!")
// })

document.addEventListener('DOMContentLoaded', () => {
  function showTime() {
    var date = new Date();
    var h = date.getHours();      // 0 - 23
    var m = date.getMinutes();    // 0 - 59
    var s = date.getSeconds();    // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }
    else if (h > 12) {
      h = h - 12;
      session = "PM";
    }
    // else if (h < 10) {
    //   h = "0" + h;
    // }

    // if (m < 10) {
    //   m = "0" + m;
    // }
    //
    // if (s < 10) {
    //   s = "0" + s;
    // }

    h = (h < 10) ? "0" + h : h;   // show two digits for hours
    m = (m < 10) ? "0" + m : m;   // show two digits for minutes
    s = (s < 10) ? "0" + s : s;   // show two digits for minutes


    // var time = h + ":" + m + ":" + s + " " + session;
    var time = `${h}:${m}:${s} ${session}`
    document.getElementById("ClockDisplay").innerHTML = time;

    setTimeout(showTime, 1000);   // show running seconds

  }

  showTime();






})
