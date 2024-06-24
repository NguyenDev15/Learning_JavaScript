
// Toán tử so sánh 
let a = 2;
let b = 3; 
let c = "3";    

console.log("Các toán tử thông thường");
// Các phép toán so sánh thông thường
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a != b);

console.log("Phần 1")

// so sánh == ( không quan tâm đến kiểu dữ liệu )
console.log(b == c);

// so sánh === ( có xét kiểu dữ liệu và so sánh giá trị )
console.log(b === c);

console.log("Phần 2");

// so sánh giữa != và !==

console.log(b != c); // không xét kiểu dữ liệu
console.log(b !== c); // có xét kiểu dữ liệu



// LƯU Ý LỚN
// BỞI VÌ JS SẼ CHUYỂN KIỂU NGẦM ĐỊNH NÊN KHI

// CỘNG MỘT CHUỖI "A" VỚI MỘT SỐ B, VÍ DỤ( "1" + 2 ) THÌ SẼ THÀNH 12 THAY VÌ 3
// LƯU ý KHI PHÉP CỘNG DÀI VÀ CỘNG VỚI CHUỖI NHƯ 1 + 2 + 3 + "4" + 5 THÌ TẤT CẢ SỐ
// NẰM CÙNG PHÍA VỚI NHAU CỘNG LẠI SAU ĐÓ MỚI CHUYỂN THÀNH CHUỖI, VẬY KQ LÀ 645

// CÒN ĐỐI VỚI CÁC PHÉP TOÁN CÒN LẠI THÌ SẼ ĐƯỢC CHUYỂN THÀNH SỐ
// CHỈ NGOẠI LỆ PHÉP CỘNG THÌ JS SẼ NGẦM ĐỔI KIỂU DỮ LIỆU CỦA SỐ 