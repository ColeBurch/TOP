import _ from "lodash";
import myName from "./myName";
import "./style.css";
import Icon from "./coffee.svg";
import Data from "./data.xml";
import Notes from "./data.csv";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.textContent = myName("Cody");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
