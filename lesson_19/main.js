// functions calling other functions
// hay còn gọi là hàm gọi hàm

// hàm cộng
function cong(a,b){
    return a + b;
}
// hàm nhân
function nhan(x,y){
    return x * y;
}

// hàm gọi các hàm khác để thực hiện phép cộng và nhân  
function congNhan(num1, num2, num3){
    // gọi hàm cộng tính tổng num1 and num2 
    let sum = cong(num1, num2);
    // gọi hàm nhân tính sum and num3
    let tich = nhan(sum, num3);
    return tich;
}

// sử dụng hàm congNhan
console.log(congNhan(2,3,4));