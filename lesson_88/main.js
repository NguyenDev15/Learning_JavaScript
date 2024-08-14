// Dom level 0 Event Handling
// là phương pháp bắt sự kiện bằng cách gán trực tiếp một hàm JS 
// cho thuộc tính sự kiện của phần tử HTML

// Xác định phần tử có id là btn
const btn = document.getElementById("btn");

// gán sự kiện cho btn, sử dụng function expresstion
// btn.onclick = function (){
//     alert(`Bạn đã click vào nút`);
// }

// Arrow function
btn.onclick = () => {
    alert(`Bạn đã click vào nút`);
}

// Ví dụ
function mouseOver (){
    document.getElementById("message").textContent = "Mouse is over the button";
}   

function mouseOut (){
    document.getElementById("message").textContent = "Mouse is left the button";
} 

function setup() {
    const button = document.getElementById("btn2");
    button.onmouseover = mouseOver;
    button.onmouseout = mouseOut;
}

// sự kiện onload của đối tượng window được kích hoạt khi toàn bộ 
// trang web đã tải xong, bao gồm tất cả tài nguyên như hình ảnh,
// script, và stylesheet.
window.onload = setup;



// Tổng hợp kiến thức
// Ưu điểm: Đơn giản dễ hiểu, phù hợp cho dự án nhỏ
// Nhược điểm: Không thể gán nhiều sự kiện cùng 1 phần tử và cùng 1 loại sự kiện
// khó bảo trì khi số lượng phần tử và sự kiện lớn 