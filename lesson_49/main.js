// hiểu rõ sức mạnh của splice();
// splice() là công cụ để thay đổi cấu trúc của mảng
//cú pháp:
// array.splice(start, deleteCount , item1, item2, ....);
// nếu deleteCount không có giá trị thì sẽ xóa đến cuối mảng
let arr = [1,2,3,4,4,5,6,7,8,9];
arr.splice(3,2); // xóa từ vị trí index 3 xóa đi 2 phần tử
console.log(arr);

// Thay thế phần tử trong mảng 
let arr1 = [1,2,3,4,5];
arr1.splice(2,1,4); // xóa từ index 2 xóa đi 1 phần tử và thay phần tử mới bằng 4 
console.log(arr1); // output: 1,2,4,4,5

// Thêm phần tử trong mảng nhưng không xóa
let arr2 = [1,2,3,4,5];
arr2.splice(2,0,6,7,8,9); // xóa từ index 2 xóa 0 phần tử và thêm các phần tử mới
// khi deletCount = 0 thì không có giá trị nào bị xóa
console.log(arr2);