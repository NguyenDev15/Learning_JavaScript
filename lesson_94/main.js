// Ví dụ vận dụng preventDefault and form events
const form = document.getElementById("login");
const userName = document.getElementById("name");
const password = document.getElementById("password");

const ul = document.querySelector("#list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // tạo thẻ li mới
    const newLi = document.createElement("li");
    // xuất ra tên khi nhập vào user name
    newLi.textContent = userName.value; 
    // thêm thẻ li vào thẻ cha ul
    ul.appendChild(newLi);
    // reset input
    userName.value = "";
    password.value = "";
});

const a = document.getElementById("link");
a.addEventListener("click", (ee) => {
    ee.preventDefault();
});