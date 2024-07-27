// String methods: startsWith(), endsWith();

// // startsWith() -> ktra chuỗi có thật sự bắt đầu bằng searchValue
// Đúng trả true, sai trả false
let a = "bcdef abcdefrasd";
let a1 = a.startsWith("b"); // true, vì chuỗi bắt đầu bằng b
let a2 = a.startsWith("c"); // false, vì chuỗi bắt đầu bằng b còn c ở vị trí 1 
console.log(a1);  
console.log(a2); 
// Tìm từ vị trí index khác xem có đúng không
let a3 = a.startsWith("ef", 3); // true vì bắt đầu từ vị trí inDex 3 nên ef đứng đầu
console.log(a3);


// // endsWith() -> ktra xem chuỗi có thật sự kết thúc bằng searchValue 
let b = "1234567890";
let b1 = b.endsWith("0"); // true vì kết thúc bằng 0
let b2  = b.endsWith("9"); // false vì không kết thúc bằng 9
console.log(b1);
console.log(b2);    
// Tìm từ inDex khác
let b3 = b.endsWith("9", 9); // true vì tìm từ vị trí index 9 trở về trước
let b4 = b.endsWith("78", 9); // false vì không kết thúc bằng 78 ở vị trí thứ 9
console.log(b3);
console.log(b4);


// VÍ DỤ BÀI TẬP 
// Xem tập tin có kết thúc bằng đuôi .mp3 hay không ?
let tenTapTin = "nhac.mp3";
let kTraTapTin = tenTapTin.endsWith(".mp3");
if(tenTapTin.endsWith(".mp3")){
    console.log("Đây là file âm thanh");
}else{
    console.log("Đây không phải file âm thanh");
}
