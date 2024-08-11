// DOM - Truy cập Parent, Children, and Siblings
// Truy cập vào các phần tử cha, con, anh em

let elm = document.querySelector(".hero__content");
// Truy cập vào phần tử cha(phần tử cha thì là duy nhất)
console.log(elm.parentElement);
// Đổi màu nền của thẻ cha
elm.parentElement.style.backgroundColor = "red";

// Truy cập vào phần tử con (phần tử con có thể có nhiều)
// trả về một danh sách
console.log(elm.children);

// nextElementSibling: chọn phần tử anh em kế tiếp
console.log(elm.children[1].nextElementSibling); // trả về vị trí index 2

// previousElemenSibling: chọn phần tử anh em trước đó
console.log(elm.children[1].previousElementSibling); 
