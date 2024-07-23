// Giải bài tập và áp dụng Function

// bài 1.
// Tính n! với hàm

// 1. Hàm tính giai thừa bằng for
function tinhGiaiThuaFor(n){
    let giaiThua = 1;
    for(let i = 1; i <= n; i++){
        giaiThua *= i;
    }
    return giaiThua;
}
// 2. Hàm tính giai thừa bằng while
function tinhGiaiThuaWhile(m){
    let gt = 1;
    let i = 1;
    while(i <= m){
        gt *= i;
        i++;
    }
   return gt;
}

// Check n
let n = Number(prompt("Xin mời nhập n"));
while(!Number.isInteger(n) || n  < 0){
    n = Number(prompt("Nhập sai, Nhập lại n"));
  }
// Check m
let m = Number(prompt("Xin mời nhập m"));
while(!Number.isInteger(m) || m  < 0){
    m = Number(prompt("Nhập sai, Nhập lại m"));
}

// Gọi hàm xuất kết quả sau khi nhập liệu
let ketQuaHamFor = tinhGiaiThuaFor(n);
console.log(`${n}! for loop = ${ketQuaHamFor}`);

let ketQuaHamWhile = tinhGiaiThuaWhile(m);
console.log(`${m}! while loop = ${ketQuaHamWhile}`);

