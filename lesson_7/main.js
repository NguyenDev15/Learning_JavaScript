// Toán tử 3 ngôi

console.log("Toán tử 3 ngôi");

let number1 = 10;
let check1 = number1 >= 0 ? "Số dương" : "Số âm";
console.log(check1);

let number2 = 419;
let check2 = number2 % 2 === 0 ? "Số chẵn" : "Số lẻ";
console.log(check2);

console.log("Bài tập");

// 1.
let diem = Number(prompt("Xin mời nhập điểm"));

let check = diem >= 8 ? "Giỏi" :diem >= 6.5?"Khá" :diem >= 5?"Trung Bình" : "Kém";
console.log(`Xếp loại học lực của bạn là: %s`,check);