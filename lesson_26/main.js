// String trong js phần 1: khái quát, index, length

// Các cách xuất chuỗi
console.log(`hello guys`);
console.log("hello guys");
// Khởi tạo chuỗi
let chuoi1 = `Khi nắng nhẹ nhàng buông
làm đôi ta cách rời`;
console.log(chuoi1);

// Quy tắc về Index trong String (chuỗi) -> Index bắt đầu từ 0
// ví dụ
let ten = "Lakaka";
console.log(ten[0]); // thứ tự là 0 nên sẽ xuất ra chuỗi là L

/*SỰ KHÁC NHAU GIỮA INDEX VÀ LENGTH 
INDEX BẮT ĐẦU TỪ 0, LENGTH BẮT ĐẦU TỪ 1 ( tránh sai )*/

// String length
// ví dụ
let chieuDaiChuoi = "Trymdangsoon";
console.log(`Chiều dài của chuỗi = %s`,chieuDaiChuoi.length);


// VÍ DỤ khác
// giới hạn chuỗi nhập vào 
let nhapChuoi = prompt("Xin nhập vào");

if(nhapChuoi.length <= 140){
    alert(`Bạn đã nhập ${nhapChuoi.length} kí tự`);
}else{
    alert(`Bạn đã nhập ${nhapChuoi.length - 140} kí tự`);
}