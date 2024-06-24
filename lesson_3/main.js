// Toán tử

// Tất cả toán tử được viết ngắn hơn

// Thay vì a = 7 thì sau khi tăng giá trị cho a chỉ cần a += ( giá trị )

let a = 7;
a += 3;
console.log(`a = %s`,a);

let b = 15;
b -= 6
console.log(`b = %s`,b);

let c = 5;
c *= 4;
console.log(`c = %s`,c);

let e = 5, f = 2;
e -= f + 1;
console.log(`e = %s`,e);


// Toán tử tăng giảm trường hợp 1
let g = 99;
let j = 81;
g++
--j 
// g++ or ++g thì giá trị sẽ tăng lên 1 g = 100
// j-- or --j thì giá trị sẽ giảm 1 j = 80

// Xuất kết quả của g và j sau khi đã tăng giảm giá trị
console.log(g);
console.log(j);


// Toán tử trường hợp 2 với biểu thức phức tạp
// Quy tắc viết dấu ++, -- khi biểu thức phức tạp
//  a++, a-- viết phía sau biến -> postfix
//  a++, --a viết trước biến -> prefix
//  TÍNH ƯU TIÊN :
// 1. Prefix
// 2. Các phép toán còn lại 
// 3. Gán giá trị cho biến ở bên trái dấu bằng
// 4. Tính Postfix
// VÍ DỤ
let n = 6;
let z = 9;
let o = n++ - ++z + 2;
// let o = 6 - 10 + 2 -> o = -2
// cuối cùng n++ thì n = 7
console.log(n); 
console.log(z);
console.log(o);


// Toán tử logic
// có 3 kiểu như  ||, &&, !
let l =11;
console.log(l > 0 && l != 10);
console.log(l > 0 && l < 15);
console.log(l > 0 || l != 11);
// Lưu ý && thì phải thỏa mãn tất cả điều kiện mới True
// Còn || thì chỉ cần 1 trong những điều kiện True thì True

// BÀI TẬP 

let r = Number(prompt("Xin nhập vào bán kính"));

let PI = Math.PI;
let cv = 2 * PI * r;
let dt = PI * r**2;

console.log(cv);
console.log(dt);

// BÀI TẬP

let p = Number(prompt("Xin mời nhập chiều dài hình chữ nhật"));
let u = Number(prompt("Xin mời nhập chiều rộng hình chữ nhật"));

let cvhcn = 2 * (p + u);
let dthcn = p * u;
console.log("Diện tích hcn là %s",dthcn);
console.log("Chu vi hcn là %s",cvhcn);

// BÀI TẬP làm tròn 2 chữ số sau dấu phẩy

let dtb = 8.214556;
console.log("Điểm trung bình =",dtb.toFixed(2));