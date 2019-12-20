let clock = document.getElementById('clock'),
    color = document.getElementById('color');

function colorClock() {

  let time    = new Date(),
      hours   = time.getHours().toString(),
      minutes = time.getMinutes().toString(),
      seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = `0${hours}`;
  }

  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }

  if (seconds.length < 2) {
    seconds = `0${seconds}`;
  }
  
  let clockValue = `${hours}:${minutes}:${seconds}`,
      colorValue = `#${hours}${minutes}${seconds}`;


  clock.textContent = clockValue;
  color.textContent = colorValue;
  document.body.style.backgroundColor = colorValue;

} 

colorClock();
setInterval( colorClock, 1000);
