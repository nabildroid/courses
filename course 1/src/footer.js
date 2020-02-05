import "./style/footer.css";
import {makeColorStyle} from "./button-styles";

const top = document.createElement("div");
top.innerText = "Top of Footer";
top.style = makeColorStyle("blue");

const bottom = document.createElement("div");
bottom.innerText = "Bottom of Footer";
bottom.style = makeColorStyle("white");

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export default footer;