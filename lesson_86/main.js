//  https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png

// Chọn phần tử cha
const container = document.getElementById("container");
let baseUrl = 
"https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
// // tạo phần tử con
// let newImg = document.createElement("img");
// newImg.src = `${baseUrl}1.png`;
// // thêm phần tử con vào container
// container.appendChild(newImg);

// thêm 151 bức ảnh vào container
// for(let i = 1; i < 151; i++){
//     let count = 0;
//     let newImg = document.createElement("img");
//     newImg.src = `${baseUrl}${i}.png`;
//     container.appendChild(newImg);   
// }

// tạo khác khối chứa
for(let i = 1; i < 151; i++){
    const newDiv = document.createElement("div");
    // thêm div vào cuối container
    // lấy node mới vừa tạo gán vào parentDiv
    const parentDiv = container.appendChild(newDiv);
    // tạo phần tử con thêm vào parentDiv
    let newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`;
    newImg.style.width = "60px";
    // thêm img vào trong khối div
    parentDiv.appendChild(newImg);
    // thêm thẻ span số thứ tự vào trong thẻ parentDiv
    const newSpan = document.createElement("span");
    newSpan.innerText = `#${i}`;
    parentDiv.appendChild(newSpan);
    // thêm class cho thẻ div
    parentDiv.setAttribute("class","item");
}
