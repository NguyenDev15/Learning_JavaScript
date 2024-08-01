// Array trong javascript (mảng)

// Khai báo mảng rỗng
let arr1 = [];
console.log(arr1);
// Khai báo mảng có các phần tử bên trong
let arr2 = [1,2,3,true,"haha",[6,5,8]];
console.log(arr2);



// SỬ DỤNG Array và Constructor
// khai báo mảng rỗng sử dụng array constructor
let arr3 = new Array();
console.log(arr3);
// Khai báo mảng có các phần tử bên trong
let arr4 = [1,2,3,true,"haha",[6,5,8]];
console.log(arr4);



//Tạo ra mảng có độ dài xác định
let arrWithLength = new Array(10);
console.log(arrWithLength);



//Truy xuất giá trị của mảng thông qua vị trí Index
let arr5 = [4,6,2,8]; // index của arr bắt đầu từ 0
console.log(arr5[3]);



// Gán, và thay đổi giá trị cho mảng qua Index
let arr6 = [5,5,4,8,8,5,2,0];
console.log(`Giá trị tại vị trí index 1 = ${arr6[1]}`);
arr6[1] = 10;
console.log(`Giá trị tại vị trí index 1 sau khi thay đổi = ${arr6[1]}`);



// Duyệt mảng
// Cách 1: dùng vòng lặp for (có thể xem giá trị và sửa mảng)
let arr7 = [1,2,3,4,5];
for(let i = 0; i < arr7.length; i++){
    arr7[i] = arr7[i] * 2;
}
console.log(arr7);



// Cách 2: dùng for...of (chỉ xem được giá trị và không thể sửa)
let arr8 = [2,4,5,6,5];
let count = 0;
for(let i of arr8){
    if(i % 2 === 0){
        count++;
    }
}   
console.log("Số lượng số chẵn là " + count);
