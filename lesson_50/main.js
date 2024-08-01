// Toán tử Spread (...) - ES6

// Toán tử Spread (...) - ES6
// Tạo ra 1 bản sao "clone" của mảng
// Tạo ra mảng mới nằm trong ô nhớ mới, có phần tử giống hệt mảng gốc

let M1 = [1,2,3];
let M2 = [...M1]; // mảng M2 là clone của M1
// Khi M2 thay đổi giá trị thì M2 sẽ không bị ảnh hưởng
M2[0] = 100; // tại vị trí index 0 sửa số thành 100
console.log(M2);

// Truyền đối số vào hàm
function sum(a,b,c){
    return a + b + c;
}
// dùng Spread (...) để truyền a,b,c vào
let numbers = [5,5,10];
let result = sum(...numbers); 
console.log(result);

// dùng Spread (...) để kết hợp mảng
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let mixArr = [...arr1,...arr2];
console.log(mixArr);

// dùng Spread (...) để thêm phần tử
let M3 = [9,8,7];
let M4 = [...M3, 6,5,4]; // thêm sau toán tử Spread(..., a,b,c,d)
console.log(M4);

// dùng Spread (...) để chuyển đổi iterable thành mảng
let myName = "hahalakaka";
let chars = [...myName];
console.log(chars);

