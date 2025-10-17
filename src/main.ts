import "./style.css";

const button1 = document.createElement("button") as HTMLButtonElement;
// as- typescript thing. HTMLButtonElement to stop it from wriggling into a different shape?
button1.textContent = "🦎🦎🦎";
// textContent adds plain text- innerHTML can have formatting i.e. <br>
document.body.appendChild(button1);
// append to document body to actually add the thing to the page object (document object model)
