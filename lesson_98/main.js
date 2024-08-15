// Event - Event delegation

// 1. Ngăn submit mặc định của form
// 2. Khi nhấn submit thì thêm 1 li vào ul

const form = document.getElementById("form");
const ul = document.getElementById("list");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // gọi các phần tử
    const userName = document.getElementById("name");
    const message = document.getElementById("message");
    // tạo thẻ li mới
    const newLi =  document.createElement("li");
    newLi.textContent = userName.value + ": " + message.value;
    // thêm li vào ul
    ul.append(newLi);
    // sau khi nhập liệu thì trả về ô trống
    form.reset();
});

// 3. Khi click vào thẻ li nào thì thẻ li đó bị xóa đi
// const lis = document.querySelectorAll("li");
// for(let li of lis){
//     li.addEventListener("click", (e) => {
//         // xóa thẻ li
//         li.remove();
//     })
// }

// Vấn đề: khi thêm 1 li mới vào ul,
// thì li đó không có sự kiện click 
// xóa phần tử li khi click vào dùng event delegation
ul.addEventListener("click", (e) => {
    const li =  e.target;
    // sai đó kiểm tra phần tử đó có phải li không
    if(li.tagName === "LI"){
        li.remove();
    }
});