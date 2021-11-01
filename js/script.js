// let deg = 6;
//   let hr = document.querySelector('#hr');
//   let mn = document.querySelector('#mn');
//   let sc = document.querySelector('#sc');

// setInterval(() => {

//    let day = new Date();
//    let hh = day.getHours() * 30;
//    let mm = day.getMinutes() * deg;
//    let ss = day.getSeconds() * deg;

//    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
//    mn.style.transform = `rotateZ(${mm}deg)`;
//    sc.style.transform = `rotateZ(${ss}deg)`;
// })

let dateInfo = new Date();
let hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
  min = dateInfo.getMinutes(),
  sec = dateInfo.getSeconds(),
  milsec = dateInfo.getMilliseconds();


let hrAngle = hr * 30 + (min * 6 / 12),
    minAngle = min * 6 + (sec * 6 / 60),
    secAngle = sec * 6 + (milsec * 0.36 / 1000);


function setAngle(wrapper, angle) {
  document.querySelector("." + wrapper).style.transform = "rotate(" + angle + "deg)";
}
setAngle("hr-wrapper", hrAngle);
setAngle("min-wrapper", minAngle);
setAngle("sec-wrapper", secAngle);



(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let newyear = "Jan 01, 2022 00:00:00",
      countDown = new Date(newyear).getTime(),
      x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }());

