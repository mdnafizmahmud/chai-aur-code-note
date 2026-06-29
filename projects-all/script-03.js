const clock = document.querySelector("#time");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let fullTime = `${hours} : ${minutes} : ${seconds}`;
  console.log(hours);
  clock.innerHTML = fullTime;
}, 1000);
