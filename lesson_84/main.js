// Dom - Bài tập về append và appendChild
let container = document.querySelector("#container");
let button = document.createElement("button");

for(let i = 0; i < 100; i++){
    let button = document.createElement("button");
    button.innerText = "Click me" + (i+1);
   // Thêm vào phần tử cha
    container.append(button);
    // Nếu nút có số lẻ thì màu khác
    if(i % 2 === 0){
        button.style.backgroundColor = "pink";
    }
    else{
        button.style.backgroundColor = "yellow";
    }
}



