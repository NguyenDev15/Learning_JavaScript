// Object: lập trình hướng đối tượng
// Sử dụng Dot và Bracket Notation để truy cập vào thuộc tính
/*
1. Dot: sử dụng dấu . 
2. Bracket Notation: sử dụng dấu []
*/

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

console.log(`Sử dụng Dot Notation và Bracket Notation`);


// Kiểm tra kiểu loại
console.log(typeof student);
console.log(typeof teacher);

// Truy cập thuộc tính : Dot Notation . và Bracket Notation []
// 1. Sử dụng Dot Notation .
console.log(student.fullName);
// 2. Sử dụng Bracket Notation [] khi key đặc biệt, có khoảng trắng, vi phạm đặt tên biến
console.log(teacher["1 fullName"]);

// Linh động sử dụng [] với biến
let inputKey = prompt("Xin mời nhập key: address or scores");
console.log(Boolean(student[inputKey]));

// Kiểm tra xem nếu nhập key không tồn tại thì báo lỗi
if(student[inputKey]){
    console.log(student[inputKey]);
}
else{
    console.log(`Không tồn tại`);
    
}