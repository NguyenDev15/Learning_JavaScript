// If else ( điều kiện )
let dtb = 5;
if( dtb >= 5.0){
    console.log("Bạn đã đậu");
}else{
    console.log("Bạn đã trượt");
}

//Bài tập if else
let dtb2 = 5;

if(dtb2 >= 8 && dtb2 <= 10){
    console.log("Học sinh giỏi");
}else if(dtb2 < 8 && dtb2 >= 6.5){
    console.log("Học sinh khá");
}else if(dtb2 < 6.5  && dtb2 >= 5){
    console.log("Học sinh tb");
}else if(dtb2 < 5  && dtb2 >= 0){
    console.log("Học sinh yếu");
}else{
    console.log("Nhập sai");
}

// CÁC BÀI TẬP

// 1.
// x + y = 14
// x - y = 4
let tong = 14;
let hieu = 4;

let x = (tong + hieu) / 2;
let y = x - hieu;

console.log(`X = %s`,x);
console.log(`Y = %s`,y);

// 2.
canNang = 68;
chieuCao = 1.67;
bmi = canNang / (chieuCao ** 2);
console.log(`Bmi của bạn là: %s`,Number(bmi.toFixed(3)));
if(bmi < 15){
    console.log("Quá gầy")
}else if(bmi >= 15 && bmi < 16){
    console.log("Hơi hơi gầy");
}else if(bmi >= 16 && bmi < 18.5){
    console.log("Gầy nhẹ");
}else if(bmi >= 18.5 && bmi < 25 ){
    console.log("Bình thường");
}else if(bmi >= 25 && bmi < 30){
    console.log("Hơi béo");
}else if(bmi >= 30 && bmi < 35){
    console.log("Béo");
}else if(bmi > 35){
    console.log("Béo phì rồi");
}

// 3.
let year = 2005;

if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    console.log("Đây là năm nhuận");
}else{
    console.log("Đây là năm không nhuận");
}

// 4.
let month = parseInt(prompt("xin mời nhập vào tháng"));


if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 ||month === 12){
    console.log("Tháng %s có 31 ngày",month);
}else if(month === 4 || month === 6 || month === 9 || month === 11 ){
    console.log("Tháng %s có 30 ngày",month);
}
else if(month === 2){
    let year2 = parseInt(prompt("Xin mời nhập thêm năm của tháng 2"));

    if(year2 % 4 === 0 && year2 % 100 !== 0 || year2 % 400 === 0){
        console.log("Tháng %s có 29 ngày",month);
    }
    else{
        console.log("Tháng %s có 28 ngày",month);
    }
}else{
    console.log("Tháng không hợp lệ vui lòng nhập lại!");
}
