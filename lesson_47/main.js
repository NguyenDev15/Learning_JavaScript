// Array Methods phần 1

// Các phương thức
/* 
1. concat(); nối mảng
2. push(); thêm đuôi
3. unshift(); thêm đầu
4. pop(); loại bỏ đuôi
5. shift(); loại bỏ đầu
6. slice(); copy mảng tùy chỉnh
7. includes(); check giá trị
*/

// 1. concat(); nối mảng hiện tại với mảng mới
let arr = [1,2,3,4];
let arr1 = [5,6,7,8];
let newArr = arr.concat(arr1);
console.log(newArr);

// 2. push(); thêm một hoặc nhiều phần tử vào cuối mảng gốc
let arr2 = [2,3,4,5];
arr2.push(6);
console.log(arr2);        

// 3. unshift(); thêm một hoặc nhiều phần tử vào đầu mảng gốc 
let arr3 = [2,3,4];
arr3.unshift(0,1,"và");
console.log(arr3);

// 4. pop(); Loại bỏ phần tử cuối cùng (thay đổi mảng gốc) và trả về giá trị đã loại bỏ
let arr4 = [7,8,9,10];
let removeArr4 = arr4.pop();
console.log(arr4); // trả về 7,8,9 vì đã dùng pop() loại bỏ 10
console.log(`Giá trị bị loại bỏ của pop() ở cuối mảng là ${removeArr4}`); // trả về 10 vì bị loại bỏ

// 5. shift(); loại bỏ phần tử đầu tiên (thay đổi mảng gốc) và trả về giá trị đã loại bỏ
let arr5 = [9,10,11,12];
let removeArr5 = arr5.shift();
console.log(arr5);
console.log(`Giá trị bị loại bỏ của shift() ở đầu mảng là ${removeArr5}`);

// 6. slice(); Dùng tạo 1 bản sao của mảng mà không làm thay đổi dữ liệu gốc của mảng
// dùng để cắt mảng ra bắt đầu từ vị trí inDex 0
// cú pháp: arr.slice(startIndex, endIndex);
// nếu không có giá trị endIndex thì mặc định chạy hết mảng
let arr6 = [77,88,99,111,122];
let sliceArr6 = arr6.slice(1); 
console.log(arr6);
console.log(sliceArr6);

//7. includes(); Ktra xem 1 mảng có chứa giá trị cụ thể hay khôg
// có trả true, sai trả false
let arr7 = ["nam", "nữ", 3,5,7,8,13,4,3,41,324];
let includesArr7 = arr7.includes("nam");
console.log(includesArr7);