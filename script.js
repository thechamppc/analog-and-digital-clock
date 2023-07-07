const hour = document.querySelector('.hrhand');
const minute = document.querySelector('.minhand');
const second = document.querySelector('.sechand');
const hrName = document.querySelector('.hrName');
const minName = document.querySelector('.minName');
const secName = document.querySelector('.secName');
const ampm = document.querySelector('.ampm');

function time(){
  const date = new Date();
  const sec = date.getSeconds();
  const secDegree = ((sec/60) * 360);
  second.style.transform = `rotate(${secDegree}deg)`;
  secName.innerText = sec + " ";

  const min = date.getMinutes();
  const minDegree = ((min/60) * 360);
  minute.style.transform = `rotate(${minDegree}deg)`;
  minName.innerText = min + ":";

  const hr = date.getHours();
  const hourDegree = 30 * hr + min / 2; //converting current time
  hour.style.transform = `rotate(${hourDegree}deg)`;
  hrName.innerText = hr + ":";

  if (hr>=12)ampm.innerHTML = "PM";
  else ampm.innerHTML = "AM";
}

setInterval(time, 1000);