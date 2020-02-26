import React from "react";

import { cards } from "../caption";
import "../style/card.css";
const createCard = ({ title, price, link, img }) =>
  React.createElement("div", { class: "card" }, [
    React.createElement(
      "div",
      { id: "img" },
      React.createElement("img", { src: img })
    ),
    React.createElement("div", { id: "info" }, [
      React.createElement("h2", {}, title),
      React.createElement("h1", {}, price),
      React.createElement("a", { href: link }, "link")
    ])
  ]);

export default React.createElement("section", { id: "cards" }, [
  React.createElement("h2", {}, "Cards"),
  cards.map(c => React.createElement(createCard, c))
]);
