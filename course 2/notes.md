## React CreateElement Arguments
```javascript
React.createElement("tagName",attributes,childs)
```
create Node element with the attributes and has childs

1. **tagName** the Node tag tag
2. **attributes** what this tag will hold as attributes like id className
3. **childs** Nodes that will be a children of the tagName Node parent

>**childs** must be a **Node**, because if tagName provided as child the parent will consider such tagName as string 

#### example
```javascript
const App = (name) => {
    return React.createElement(
        "div",
        {
            id: "root",
        },
        React.createElement("h2",{},`App: ${name}`
    )
}
```