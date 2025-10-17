import "./style.css";

let counterNumber: number = 0;

const counterDiv = document.createElement("div") as HTMLDivElement;
counterDiv.textContent = `${counterNumber} Lizards`;
document.body.append(counterDiv);

const clickerButton = document.createElement("button") as HTMLButtonElement;
// as- typescript thing. HTMLButtonElement to stop it from wriggling into a different shape?
clickerButton.textContent = "🦎🦎🦎";
// textContent adds plain text- innerHTML can have formatting i.e. <br>
document.body.appendChild(clickerButton);
// append to document body to actually add the thing to the page object (document object model)


clickerButton.addEventListener("click", () => {
  counterNumber++;
  counterDiv.textContent = `${counterNumber} Lizards`;
});
