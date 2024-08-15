// Mini Project

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

let count = 0;

btn.addEventListener("click", () => {
    count++;
    if(count % 2 === 0){
        search.classList.add("active");
    }
    else{
        search.classList.remove("active");
    }
}); 