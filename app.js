const kostebeks = document.querySelectorAll(".kostebek");
const start = document.querySelector(".start");
const newGame = document.querySelector(".newgame");
const scores = document.querySelector(".score");
const timers = document.querySelector(".time");
const allKostebek = document.querySelectorAll(".kostebek img");

let score = 1;
let time = 1;

start.addEventListener("click", () => {
  if (time == 1) {
    setInterval(containerFunction, 2000);
    setInterval(timer, 1000);
  }
});

newGame.addEventListener("click", () => {
  document.location.reload(true);
});

allKostebek.forEach((a) => {
  a.addEventListener("click", (e) => {
    scores.innerHTML = `Score : ${score++}`;
  });
});

const timer = function () {
  if (time <= 20) {
    timers.innerHTML = `Time : ${time++}`;
  } else {
    clearInterval(timer);
    clearInterval(containerFunction);
  }
};

const containerFunction = function () {
  let randomNumber = Math.ceil(Math.random() * kostebeks.length);
  let number = randomNumber - 1;
  if (!kostebeks[number].classList.contains("active") && time <= 20) {
    kostebeks[number].classList.add("active");

    setTimeout(() => {
      kostebeks.forEach((a) => {
        a.classList.remove("active");
      });
    }, Math.ceil(Math.random() * 1200) + 500);
  }
};
