// String Methods: split();

// string.split(separator, limit); 
let device = "Laptop, SmartPhone, Tivi, AppleWatch, Ipad, Mouse, Keyboar";
let arr = device.split(","); // dùng để tách chuỗi và trả về mảng
console.log(arr);
// Giới hạn phần tử của mảng
let arr2 = device.split(",", 5);
console.log(arr2);
// Nếu nhập "" thì sẽ tách từng kí tự ra mảng
let str = "abcdefgh";
let arr3 = str.split(""); // xuất ra 8 kí tự từ a đến h
console.log(arr3); 