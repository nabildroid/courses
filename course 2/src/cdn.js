const cdn = [
    "https://unpkg.com/react@16/umd/react.development.js",
    "https://unpkg.com/react-dom@16/umd/react-dom.development.js"
];
export default cdn.map(url=>{
    const script = document.createElement("script");
    script.src = url;
    return script;
})