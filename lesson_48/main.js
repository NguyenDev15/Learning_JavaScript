// Array Methods phần 2

// Các phương thức
/*
1. inDexOf();
2. lastIndexOf();
3. reverse();
4. join(separator);
*/

// 1. inDexOf(); Trả về vị trí inDex của phần tử xuất hiện lần đầu tiên trong mảng
// Nếu không tìm thấy thì trả về -1
let arr1 = [1,2,3,2,5,6,5,8,9];
let inDexOfArr1 = arr1.indexOf(2);
console.log(`Vị trí index của số 2 đầu tiên trong mảng với inDexOf() là ${inDexOfArr1}`);

// 2. lastIndexOf(); Trả về vị trí inDex của phần tử xuất hiện lần đầu cuối trong mảng
// Nếu không tìm thấy thì trả về -1
let arr2 = [1,2,3,2,5,6,5,8,9];
let lastIndexOfArr2 = arr2.lastIndexOf(2);
console.log(`Vị trí index của số 2 cuối cùng trong mảng với lastInDexOf() là ${lastIndexOfArr2}`);

// 3. reverse(); đảo ngược các phần tử trong mảng gốc 
// thay đổi mảng gốc và không tạo ra mảng mới
let arr3 = [5,6,7,8,9,10];
arr3.reverse();
console.log(`Mảng sau khi đảo ngược là: ${arr3}`);
// nếu muốn giữ nguyên mảng gốc và tạo ra một mảng tạo ngược thì dùng slice() để copy
// sau đó sử dụng reverse()
let arr4 = [1,2,3,4,5];
console.log(`Mảng arr4 là: ${arr4}`);
let arr5 = arr4.slice().reverse();
console.log(`Mảng arr5 sau khi copy arr4 và đảo ngược là ${arr5}`);

// 4. join(separator); 
/* Nối các phần tử trong mảng thành chuỗi, theo kí tự phân tách separator
separtor : nếu bỏ trống thì mặc định là dấu phẩy
phương thức này không làm thay đổi mảng gốc
*/
//Không truyền separator
let arr6 = ["nam", "nữ", 1,2,3];
let string1 = arr6.join();
console.log(string1);
//Có truyền separator
let string2 = arr6.join(" - ");
console.log(string2);

