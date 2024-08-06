// Lập trình hướng đối tượng 
// Javascript Objects
// oop phần 1 - tổng quan - Literal syntax JS

let a = 5;
let b = 6.6;
console.log(typeof a); // number
console.log(typeof b); // number

let check = true;
console.log(typeof check); // boolean

let str = "hahaha";
console.log(typeof str); // string

let arr = [1,2,3,4,"hjihi"];
console.log(typeof arr); // object 



// Khai báo đối tượng
// Sử dụng Literal syntax
let student = {
    // key: value ( trái là key, phải là value)

    // thuộc tính
    fullName : "Anh Trung Moi",
    birthYear : 2002,
    address : {
        city : "Hanoi",
        country : "VietNam",
    },
    scores : [8, 9, 10],

    // phương thức
    getAge : function(){
        // Tính tuổi dựa vào năm sinh
        return 2024 - this.birthYear;
    },

    diemTrungBinh : function(){
        // Tính tổng điểm
        sumScores = this.scores.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0);
        // Trả về điểm trung bình
            return sumScores / 3;
    },
};

// Cách đặt tên qui phạm vi tắc đặt tên
let teacher = {
    "1 fullName" : "Nguyễn A B",
    "@address" : {
        city : "Tp.Hcm",
        country : "VietNam",
    },

};


/* Tổng hợp kiến thức
- Object trong lập trình hướng đối tượng giống như 1 đối tượng cụ thể trong thế giới thực
    - Mỗi đối tượng đều có thuộc tính và phương thức riêng 
        + Thuộc tính: Đặc điểm của đối tượng
        + Phương thức: Hành vi của đối tượng
    - Theo cách hiểu khác
        + Thuộc tính: có thể hiểu nó là 1 biến để lưu giá trị cụ thể (key: value)
        + Phương thức: có thể hiểu nó là các hàm để xử lí tính toán

    **Ví dụ với 1 chiếc xe ô tô
        + Thuộc tính: Màu sắc, Kích thước, Hình dáng, Hãng xe,...
        + Phương thức: Chạy xe, đỗ xe, lái xe,...

    **Ví dụ với 1 con chim
        + Thuộc tính: Màu sắc, loài chim, kích thước,...
        + Phương thức: Bay, đậu, ngủ, bắt mồi,....  
*/



