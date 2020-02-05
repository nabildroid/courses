import "./style/nav.css";
import {navCaption} from "./caption";
import webpackImage from "./images/webpack.jpg";
const nav = document.createElement("nav");
const title = document.createElement("h1");
const img = document.createElement("img")

title.innerText = navCaption.title;
img.setAttribute("src",webpackImage);

nav.appendChild(title);
nav.appendChild(img);
export default nav;
