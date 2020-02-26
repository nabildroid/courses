import React from "react";

import desc from "./sections/desc";
import cards from "./sections/card";
/**
 *
 * @param {string} name the name of this app
 * @returns {Node}
 */
const App = name => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "title" }, [
      "App Name: ",
      React.createElement("span", {}, name)
    ]),
    desc,
    cards
  ]);
};

export default App;
