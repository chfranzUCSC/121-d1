import "./style.css";

let counterNumber: number = 0;
let prevTime: number = performance.now();
let growthRate: number = 0;

const counterDiv = document.createElement("div") as HTMLDivElement;
updateCounterDiv();
document.body.append(counterDiv);

const clickerButton = document.createElement("button") as HTMLButtonElement;
clickerButton.textContent = "🦎🦎🦎";
document.body.appendChild(clickerButton);

clickerButton.addEventListener("click", () => {
  addOne();
});

const upgradeButton = document.createElement("button") as HTMLButtonElement;
upgradeButton.textContent = "Lizard emitting ancient artifact, cost: 10";
document.body.appendChild(upgradeButton);

upgradeButton.addEventListener("click", () => {
  if (counterNumber >= 10) {
    growthRate += 1;
    incrementAndUpdate(-10);
  }
});

function incrementCounter(numToAdd: number) {
  counterNumber += numToAdd;
}

function updateCounterDiv() {
  counterDiv.textContent = `${Math.floor(counterNumber)} Lizards`;
}

function incrementAndUpdate(add: number) {
  incrementCounter(add);
  updateCounterDiv();
}

function addOne() {
  incrementAndUpdate(1);
}

function update() {
  // deno-lint-ignore prefer-const
  let currTime: number = performance.now();

  // time diff in full seconds, not ms
  // deno-lint-ignore prefer-const
  let elapsedTime: number = (currTime - prevTime) / 1000;

  incrementAndUpdate(growthRate * elapsedTime);

  prevTime = currTime;

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
