import cdn from "./cdn";
const Root = async () => import("./root");

const body = document.body;


window.addEventListener("DOMContentLoaded",async ()=>{
    const root = await Root();
    body.appendChild(root);
});


cdn.forEach(s=>body.appendChild(s));