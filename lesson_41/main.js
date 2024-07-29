// setTimeout trong  JS

/* setTimeout được sử dụng thực hiện một hàm sau một khoảng
thời gian nhất định 
Cú pháp: setTimeout(function, milliseconds, para1, para2,....)
function mà chúng ta muốn thực hiện hàm sau 1 tgian
delay được tính bằng milli giây
*/
 
// Ôn tập hàm và sử dụng setTimeout

// Arrowfunction
let arrow = () => {
    console.log("Hello Arrow");
}
setTimeout(arrow, 3000); // sau 3 giây hàm sẽ xuất hiện

// Function declaration
function declaration(){
    console.log("Hello Declaration");
}
setTimeout(declaration, 2000); // sau 2 giây hàm sẽ xuất hiện

// Function expression
let expression = function(){
    console.log("Hello Expression");
}
setTimeout(expression, 1000); // sau 1 giây hàm sẽ xuất hiện

// Truyền trực tiếp setTimeout vào function
// setTimeout(() => {
//     console.log("Hello Arrow");
// }, 3000)


// Sử dụng với tham số
function hello(yourname){
    console.log("Hello " + yourname);
}
// setTimeout(hello, 4000, "Nam");


// Khi muốn hủy quá trình thực hiện hàm
let timeOut = setTimeout(hello, 3000, "Haha");
clearTimeout(timeOut);