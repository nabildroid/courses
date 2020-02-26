import React from "react";

import { details } from "../caption";

const sections = details.map(section => {
  const childs = section.items.map(item =>
    React.createElement("tr", {}, [
      React.createElement("td", {}, item.title),
      React.createElement("td", {}, item.value)
    ])
  );
  return [
    React.createElement("h3", { id: "sub-section-title" }, section.section),
    React.createElement("table", {}, childs)
  ];
});

export default React.createElement("section", { id: "desc" }, [
  React.createElement("h2", {}, "Description"),
  sections
]);
