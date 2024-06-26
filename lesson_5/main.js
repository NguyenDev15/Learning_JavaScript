//  các hàm toán thông dụng 
console.log("Các hàm toán thông dụng");

// hàm Mart.sqrt()
let a = Math.sqrt(4);
console.log("Căn bậc 2 của 4 = %s",a);

// hàm Math.pow 
let b = Math.pow(2,3);
console.log("2 mũ 3 = %s",b);

// hàm Math.abs() -> giá trị tuyệt đối
let c = Math.abs(-2);
console.log("Giá trị tuyệt đối của -2 = %s",c);

// hàm Math.ceil() -> làm tròn lên và hàm Math.floor() -> làm tròn xuống 
let d = Math.ceil(6.4353);
let e = Math.floor(6.4353);
console.log("Làm tròn lên của 6.4353 là %s",d); 
console.log("Làm tròn xuống của 6.4353 là %s",e); 

// hàm Math.round() 
let f = Math.round(0.5); // từ 0.5 trở lên thì tăng đơn vị lên
console.log("Làm tròn từ 0.5 trở lên = %s",f); 
let g = Math.round(0.4); // từ 0.4 trở xuống thì giảm đơn vị
console.log("Làm tròn từ 0.4 trở xuống = %s",g);

// hàm toFixed() -> làm tròn x chữ số đơn vị 
let h = 34.5552;
console.log("Làm tròn x đơn vị của 34.5552 = %s",Number(h.toFixed(2))); 
// lưu ý hàm toFixed sẽ trả về kiểu dữ liệu string nên phải ép kiểu dữ liệu lại Number

// hàm Math.min() và Math.max()
let j = Math.min(1, 2, 6, 7, 76, 234, 656);
let k = Math.max(1, 2, 6, 7, 76, 234, 656);
console.log("Max = %s Min = %s",k,j);




// hàm Number, isNaN và Number.isNaN
console.log("Hàm Number, isNaN và Number.isNaN");
// hàm Number chuyển về số -> nếu không chuyển được thì về NaN
let str = "123a";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);

// hàm isNaN là hàm ktra ( là không phải là số ) hay không
// tức là nếu ktra là số thì trả về false còn không phải thì là true
// ví dụ :
 let p = "123"; // false vì là số
console.log(isNaN(p));
 
let i = Number(true); // giá trị true sẽ đc hiểu là 1 false là 0 khi ép kiểu
console.log(i);

// Hàm Number.isNaN => hàm này để ktra giá trị truyền vào có phải NaN không
// Đúng thì trả true sai thì trả false
// ví dụ:
console.log(Number.isNaN(NaN)); // là NaN nên trả true
console.log(Number.isNaN("zxcx" / "qdd")); // không chia nhau được nên trả về NaN


// sử dụng hàm Math.random()
console.log("Hàm Math.random()");

// trường hợp 1 Random từ [0->1) 
let random = Math.random();
console.log(` số ngẫu nhiên từ 0 gần 1 là: %s`,random);

// trường hợp 2 Random số lớn hơn 1
let random2 = Math.random()*10; // nhân thêm vào đằng sau Math random
console.log(`số ngẫu nhiên từ 0 gần 10 là: %s`,random2);

// có thể ép sang số nguyên bằng cách sử dụng parseInt
let random3 = parseInt(Math.random()*30);
console.log(`số nguyên nhẫu nhiên từ 0 đến gần 30 là: %s`,random3);

// có thể đổi giá trị Min khác đi ví dụ:
let random4 = parseInt(Math.random()*41)+10;// nếu thay đổi Min thì + thêm vào sau và giảm phần ramdom bằng cách trừ Min đi
console.log(`số nguyên nhẫu nhiên từ 10 đến 50 là: %s`,random4);
