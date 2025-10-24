import "./style.css";

let counterNumber: number = 0;

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
  counterDiv.textContent = `${counterNumber} Lizards`;
}

function addOne() {
  incrementCounter(1);
  updateCounterDiv();
}

setInterval(addOne, 1000);
