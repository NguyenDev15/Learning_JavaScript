// addEventListener: Sử dụng để gọi Function khi mà sự kiện được chỉ định xảy ra
// cú pháp: element.addEventListener(event, function, options) 


// lấy phần tử
const btn1 = document.getElementById("btn1");
// thêm sự kiện
// sử dụng với function expresstion
// btn1.addEventListener("click", function(){
//     alert(`Bạn đã click vào button`);
// })

// sử dụng function declaration
// function handleClick (){
//     alert('Bạn đã click');
// }
// btn1.addEventListener("click", handleClick);

// sử dụng với Arrow Function
btn1.addEventListener("click", () => {
    alert("Bạn đã click vào nút");
})


// Ưu điểm addEventListener
// có thể thêm nhiều sự kiện cho cùng 1 phần tử
// lấy phần tử
const btn2 = document.getElementById("btn2");
// hàm xử lí 2 sự kiện
function handleClick1(){
    alert("Bạn đã click vào nút");
}
function handleClick2(){
    alert("Hello Bạn");
}

// thêm sự kiện 
// btn2.addEventListener("click", handleClick1);
// btn2.addEventListener("click", handleClick2);

// có thể xóa sự kiện
// btn2.removeEventListener("click", handleClick2);

// có thể sử dụng sự kiện với options
btn2.addEventListener("click", handleClick1, {once: true}); // options: chỉ gọi 1 lần
btn2.addEventListener("click", handleClick2);   