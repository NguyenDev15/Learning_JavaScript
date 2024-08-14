// Event Js Mini

function rgbRandom(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const btn = document.querySelector("#btn");
const title = document.querySelector("#title")
btn.addEventListener("click", () => {
    body.style.backgroundColor = rgbRandom();
    title.textContent = rgbRandom();
    title.style.color= rgbRandom();
});
