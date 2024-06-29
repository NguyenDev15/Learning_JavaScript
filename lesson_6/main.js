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

// 5. ax2 + bx + c = 0 -> tính delta
let a = 1;
let b = 1;
let c = 1;

let delta= (b**2) - (4*a*c);

if(delta < 0){
    console.log("Phương trình vô nghiệm"); 
}else if(delta === 0){
    let x1 = (-b) / (2*a);
    console.log("Phương trình có nghiệm kép x1 = x2 = %s",x1);
}else if(delta > 0){
    let xx = (-b + Math.sqrt(delta)) / (2 * a);
    let xxx = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có 2 nghiệm phân biệt x1 = %s và x2 = %s`,xx,xxx);
}

// 6.

let monthandquy = 1;

if(monthandquy === 1 || monthandquy === 2 || monthandquy === 3 ){
    console.log("Tháng %s là quí 1",monthandquy);
}
else if(monthandquy === 4 || monthandquy === 5 || monthandquy === 6 ){
    console.log("Tháng %s là quí 2",monthandquy);
}
else if(monthandquy === 7 || monthandquy === 8 || monthandquy === 9 ){
    console.log("Tháng %s là quí 3",monthandquy);
}
else if(monthandquy === 10 || monthandquy === 11 || monthandquy === 12 ){
    console.log("Tháng %s là quí 4",monthandquy);
}