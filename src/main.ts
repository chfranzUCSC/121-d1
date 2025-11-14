import "./style.css";

let counterNumber: number = 0;
let prevTime: number = performance.now();
// deno-lint-ignore prefer-const
let growthRate: number = 1;

const counterDiv = document.createElement("div") as HTMLDivElement;
updateCounterDiv();
document.body.append(counterDiv);

const clickerButton = document.createElement("button") as HTMLButtonElement;
// as- typescript thing. HTMLButtonElement to stop it from wriggling into a different shape?
clickerButton.textContent = "🦎🦎🦎";
// textContent adds plain text- innerHTML can have formatting i.e. <br>
document.body.appendChild(clickerButton);
// append to document body to actually add the thing to the page object (document object model)

clickerButton.addEventListener("click", () => {
  addOne();
});

function incrementCounter(numToAdd: number) {
  counterNumber += numToAdd;
}

function updateCounterDiv() {
  counterDiv.textContent = `${Math.floor(counterNumber)} Lizards`;
}

function addOne() {
  incrementCounter(1);
  updateCounterDiv();
}

function update() {
  // deno-lint-ignore prefer-const
  let currTime: number = performance.now();

  // time diff in full seconds, not ms
  // deno-lint-ignore prefer-const
  let elapsedTime: number = (currTime - prevTime) / 1000;

  incrementCounter(growthRate * elapsedTime);
  updateCounterDiv();

  prevTime = currTime;

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
