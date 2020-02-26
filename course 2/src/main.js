import { render } from "react-dom";
import "./style/main.css";
import app from "./app";
import { appName } from "./caption";

const { body } = document;

const root = document.createElement("div");
root.setAttribute("id", "root");

render(app(appName), root);

body.appendChild(root);
