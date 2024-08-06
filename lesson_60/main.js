// Object: lập trình hướng đối tượng
// Thêm, sửa, xóa thuộc tính 

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

    // Phương thức được viết lại, để trả về một thuộc tính
    getAge2 : function(){
        // Tính tuổi dựa vào năm sinh
        this.age = 2024 - this.birthYear;
        return this.age
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

// Kiểm tra kiểu loại
console.log(typeof student);
console.log(typeof teacher);

// Truy cập thuộc tính : Dot Notation . và Bracket Notation []
// 1. Sử dụng Dot Notation .
console.log(student.fullName);
// 2. Sử dụng Bracket Notation [] khi key đặc biệt, có khoảng trắng, vi phạm đặt tên biến
console.log(teacher["1 fullName"]);

// Linh động sử dụng [] với biến
// let inputKey = prompt("Xin mời nhập key: address or scores");
let inputKey = "address";
console.log(student[inputKey]);

// Kiểm tra xem nếu nhập key không tồn tại thì báo lỗi
if(student[inputKey]){
    console.log(student[inputKey]);
}
else{
    console.log(`Không tồn tại`);
    
}


// TRUY CẬP PHƯƠNG THỨC
console.log(`Truy cập phương thức`);
console.log(student.getAge());
console.log(student.diemTrungBinh());

// Vấn đề: Giả sử trong chương trình bạn cần gọi nhiều hàm getAge
// -> chương trình sẽ mất nhiều lần tính toán do gọi đi gọi lại nhiều lần

// console.log(student.getAge);
// console.log(student.getAge);
// console.log(student.getAge);
// console.log(student.getAge);

// Sử dụng cách khác là gọi getAge2 vừa được tạo ở trên 
student.getAge2();
// Sau đó xuất tuổi thông qua thuộc tính age mới được thêm từ phương thức getAge2
console.log(student.age);
console.log(student.age);


// Thêm, sửa, xóa thuộc tính ( thêm cặp key value)
console.log(`Thêm, sửa, xóa thuộc tính`);

// Thêm
student.email = "123abc@gmail.com"; // thêm thuộc tính mới với Dot Notation
student["website"] = "http://codengoo.danghoc"; // thêm thuộc tính mới với Bracket Notation
console.log(student.email);
console.log(student.website);
// Xóa
delete student.email; // đã xóa thuộc tính email
console.log(student); 
// Sửa
student.website = "đã được sửa";
console.log(student);




