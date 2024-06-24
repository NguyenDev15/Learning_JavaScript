
// Toán tử so sánh 
let a = 2;
let b = 3; 
let c = "3";    

console.log("Các toán tử thông thường");
// Các phép toán so sánh thông thường
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a != b);

console.log("Phần 1")

// so sánh == ( không quan tâm đến kiểu dữ liệu )
console.log(b == c);

// so sánh === ( có xét kiểu dữ liệu và so sánh giá trị )
console.log(b === c);

console.log("Phần 2");

// so sánh giữa != và !==

console.log(b != c); // không xét kiểu dữ liệu
console.log(b !== c); // có xét kiểu dữ liệu