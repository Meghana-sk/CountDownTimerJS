import "./styles.css";
const days = document.getElementById("valued");
const hours = document.getElementById("valueh");
const mins = document.getElementById("valuem");
const sec = document.getElementById("values");

console.log(days);

function countDownTimer() {
  const lastDate = new Date("July 30, 2022 23:59:00");
  const currentDate = new Date();
  const timeLeft = lastDate.getTime() - currentDate.getTime(); //ms

  days.innerHTML = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  mins.innerHTML = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  sec.innerHTML = Math.floor((timeLeft % (1000 * 60)) / 1000);
}

setInterval(countDownTimer, 1000);
