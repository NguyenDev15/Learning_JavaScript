// Đệ quy với JavaScript
// Tính n! = giaiThua(n - 1)!...1

let giaiThua = (n) => {
    if( n === 1 || n === 0){
        return 1;
    }else{
        return n * giaiThua(n-1);
    }
}
// Gọi hàm 
let ketQua = giaiThua(5);
console.log(ketQua);

// ví dụ khác
// Dãy Fibonacci F1 = 1, F2 = 1; Fn = F(n-1) + F(n-2)
let f = (m) => {
    if (m <= 2){
        return 1;
    }
    else{
        return f(m-1) + f(m-2);
    }
}
let ketQua2 = f(18);
console.log(ketQua2);