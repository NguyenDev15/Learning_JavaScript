// Strings Methods replace and repeat

// string.replace(oldValue, newValue);
let thayThe = " học nữa học mãi";
console.log(thayThe.replace("học", "ngủ"));

// để thay thế toàn chỗ những chữ giống nhau
// sử dụng biểu thức chính quy
let thayThe2 = "học học học nữa và học học mãi";
console.log(thayThe2.replace(/học/g, "ngủ"));

// repeat(); lặp lại chuỗi
let lapLai = "Hello Guys, ";
console.log(lapLai.repeat(5));  // lặp lại chuỗi 5 lần