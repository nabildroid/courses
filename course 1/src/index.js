import nav from "./nav";
import makeButton from "./button";
import { red } from "./button-styles";

// code splitting || lazy load
const loadFooter = () => {
    return import("./footer").then(m=>m.default)
};

const merge = require("webpack-merge");

console.log(merge(
    {
        name: "nabil",
        age: 20
    },
    {
        name: "droid",
        num: 662663209
    }
));







console.log(`hello world ${Math.random()}`);


// add Nav
document.body.appendChild(nav);

// add Button
const ButtonFooter=makeButton("show footer");
ButtonFooter.style = red;
document.body.appendChild(ButtonFooter);

ButtonFooter.addEventListener("click" , () => {
    loadFooter().then( footer => {
        // add Footer
        document.body.appendChild(footer);
    })
});

