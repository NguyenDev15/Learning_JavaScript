//  các hàm toán thông dụng 

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
