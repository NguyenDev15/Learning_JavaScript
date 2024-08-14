// sử dụng this keyword để tối ưu hóa code

function randomColor (){
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    return `rgb(${r},${g},${b})`;
}

// Sử dụng this để tối ưu
function changeColor(){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

const btnList = document.querySelectorAll(".btn");
for(let btn of btnList){
    btn.addEventListener("click", changeColor);
}

const title = document.querySelectorAll(".title");
for(let titles of title){
    titles.addEventListener("click", changeColor);
}