// Hàm (Function)
// hàm giúp tái sử dụng giúp làm gọn quá trình code

// hàm đơn giản
function hamDauTien(){
    console.log("hello");
}

hamDauTien();

// hàm với tham số parameters
let inputName = "HAHA";
function hamThuHai(name){
    console.log(`Tên của bạn là ${name}`);
}
hamThuHai(inputName);

// Ví dụ khác

function tinhTong(a,b){
    return a + b;
}
console.log(`a + b = ${tinhTong(5,5)}`);

let diem1 = 6;
let diem2 = 5;
let tongDiem = tinhTong(diem1,diem2);
console.log(` Tổng điểm = ${tongDiem}`);
console.log(` Điểm tb = ${tongDiem / 2  }`);


// CHÚ Ý THÂN HÀM KHÔNG CÓ GIÁ TRỊ TRẢ VỀ LÀ RETURN THÌ GIÁ TRỊ TRẢ VỀ LÀ UNDIFINED

// Các cách khai báo hàm ->> 3 cách
// Cách 1 như trên được gọi là "Function declaration"
/* function tong(a=0,b=0){
    return a + b;
}
let kq1 = tong(5,5);
console.log(kq1);
*/

// Cách 2 được gọi là "Function expression"
/*
let tich = function(a,b){
    return a * b;
}
let kq2 = tich(5,5);
console.log(kq2);
*/
// HAI CÁCH TRÊN KHÁC NHAU Ở CHỖ 1. GÁN VÀO BIẾN ĐỂ GỌI HÀM, 2. DÙNG TÊN HÀM ĐỂ GỌI


// Cách 3. ARROW FUNCTION
// ngắn gọn hơn nhưng nhiều hạn chế
let hamMuiTen = (a,b) => a * b;
console.log(`Arrow Function = ${hamMuiTen(3,5)}`);

// Ví dụ phức tạp hơn so sánh giữa Function expression và Arrow Function
// Function expression
let hamViDu = function(a,b){
    let nhan = a * b;
    let cong = a + b;
    return nhan + cong;
}
// Arrow Function
let hamViDuMuiTen = (a,b) => {
    let nhan = a * b;
    let cong = a + b;
    return nhan + cong;
}

// Gọi hàm
console.log(`Function expression = ${hamViDu(6,5)}`);
console.log(`Arrow Function = ${hamViDuMuiTen(5,6)}`);