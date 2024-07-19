// BÀI TẬP VỀ VÒNG LẶP
console.log("BÀI TẬP VÒNG LẶP");
// Bài tập 1 viết vào số nguyên tính n!
// Dùng For Loop và While Loop

// Xét n hợp lệ
let n = Number(prompt("Mời nhập vào số nguyên n không âm"));
while(!Number.isInteger(n) || n < 0){
    n = Number(prompt("Nhập sai, nhập lại"));
}

// Dùng for 
console.log("For Loop");
let giaiThua = 1;
for(let i = 1; i <= n; i++){
    giaiThua *= i;
}
console.log(`%s! = %s`,n,giaiThua);

// Dùng While
console.log("While Loop");
let gt = 1;
let i = 1;
while(i <= n){
    gt *= i;
    i++;
}
console.log(`%s! = %s`,n,gt);