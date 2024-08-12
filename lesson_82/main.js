// Dom - Append, Prepend
// Phương thức dùng để thêm một hoặc nhiều phần tử con vào trong phần tử cha
// Append: thêm vào cuối
// Prepend: thêm vào đầu

// Vi dụ 1
// Bước 1 tạo element
const newImg = document.createElement("img");
console.log(newImg);

// Kiểm tra toàn bộ thuộc tính và phương thức của đối tượng trong DOM
console.dir(newImg);

// Bước 2: 
// Cách 1
// newImg.setAttribute("src", "../lesson_82/assets/img/vac2.jpg");
// Cách 2
newImg.src = "../lesson_82/assets/img/vac2.jpg";

// Bước 3 append thêm vào một phần tử đã có sẵn
document.body.append(newImg); // thêm vào cuối phần tử cha (trong trường hợp này là body)
// set chiều cao chiều rộng 
newImg.style.width = "100vw";


// Ví dụ 2
let newText = document.createElement("p"); // Tạo element
newText.textContent = "Xin chào em đang học Js"; // set Attribute
document.body.append(newText);
document.body.append(newText);

// Ví dụ 3: thêm vào phần tử mà mình chọn
const p = document.querySelector(".hero__desc");
p.append(" Vài câu nói có khiến người thay đổi, có khiến bờ môi ấm êm");


// Ví dụ 4: thêm nhiều phần tử vào cuối phần tử cha
let elm1 = document.createElement("p");
elm1.textContent = " New Text 1";
let elm2 = document.createElement("span");
elm2.textContent = " New Text 2";
// Lấy phần tử cha
let container = document.querySelector(".hero__heading");
// Thêm nhiều phần tử mới vào cuối phần tử cha
container.append(elm1, elm2, " Some more text");

// Prepend
// Nếu muốn thêm vào đầu
container.prepend("Hello Guys "); 

