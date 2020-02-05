// take a str, the button label and return a element
/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */

const makeButton = (name)=>{
    const buttonLable = `Button: ${name}`;
    const button = document.createElement("button");
    button.innerText = buttonLable;
    return button;
};

module.exports = makeButton;
