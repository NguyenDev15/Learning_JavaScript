// Phương thức filter(); - > trích lọc các phần tử thỏa mãn điều kiện của hàm

// cú pháp: array.filter(currentValue, [currentIndex], [array])
/*Hàm được gọi với những đối số sau
 currentValue: Giá trị hiện đang xử lí trong mảng
 currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lí
 array: (Tùy chọn) mảng đang được duyệt
 */

let numbers = [1,2,3,4,5];
// Tìm những số chẵn trong mảng
let evenNumbers = numbers.filter(
    //Function
    (value, index, array) => value % 2 === 0
);
console.log(evenNumbers);