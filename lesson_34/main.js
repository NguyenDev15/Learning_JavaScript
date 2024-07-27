// Bài tập về String

// Nhập 1 chuỗi từ bàn phím
// Đếm xem có bao nhiêu kí tự in thường và in hoa
// Bao nhiêu số
// Bao nhiêu khoảng cách (space)

let str = prompt("Xin mời bạn nhập vào");

//Biến đếm
let toUpperCount = 0;
let toLowerCount = 0;
let numberCount = 0;
let spaceCount = 0;

// lặp qua từng kí tự và đếm kí tự
for(let i = 0; i < str.length; i++){
    let char = str[i];
    //Kiểm tra chữ in thường
    if(char >= "a" && char <= "z"){
        toLowerCount++;
    }
    else if(char >= "A" && char <= "Z"){
        toUpperCount++;
    }
    else if(char >= "0" && char <= "9"){
        numberCount++;
    }
    else if(char === " "){
        spaceCount++;
    }
}
// In kết quả
console.log(`Có ${toLowerCount} kí tự thường`);
console.log(`Có ${toUpperCount} kí tự hoa`);
console.log(`Có ${numberCount} chữ số`);
console.log(`Có ${spaceCount} khoảng trắng`);