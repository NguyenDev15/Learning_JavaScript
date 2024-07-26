// String js part 3: trim - trimEnd - trimStart


// string.trim()
let a = "     Hello     Guys   ";
console.log(a.length);
let a1 = a.trim(); // Loại bỏ các khoảng trắng ở hai đầu chuỗi
console.log(a1);
console.log(a1.length);

// string.trimEnd()
let b = a.trimEnd(); //xoá tất cả khoảng trắng đằng sau
console.log(b); 

// string.trimStart
let c = a.trimStart(); //xóa tất cả khoảng trắng ở đầu
console.log(c);