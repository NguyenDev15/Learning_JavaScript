// Object: Lập trình hướng đối tượng
// Hiểu rõ về ES6 Classes 
/* Về cơ bản ES6 sử dụng class để cung cấp cú pháp rõ ràng hơn
so với cách sử dụng Hàm Tạo - Constructor
- Class vẫn tuân theo những gì đã học về kế thừa từ nguyên mẫu - prototype
*/

// Hàm tạo - Constructor
let Studen2 = function(fullName, ID, birthYear, homeTown){
    // thuộc tính

    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;

    // phương thức

    this.showInfo = function(){
        return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown}`;
    };
};
// Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo Studen
const sv1 = new Studen2("Nguyễn Văn A", "001100", 2004, "Tp.Hcm");
const sv2 = new Studen2("Nguyễn Văn B", "001200", 2002, "Hà Nội");



// Khai báo ES6 classes
// Cách 1: Class expression ( ít dùng vì không ngắn gọn )
const SinhVienEx = class {
    // thuộc tính

    // các phương thức
};

// Cách 2: Class decoration (dùng nhiều vì ngắn gọn)
class SinhVienDecor {
    constructor(fullName, ID, birthYear, homeTown){
        // thuộc tính
        this.fullName = fullName;
        this.ID = ID;
        this.birthYear = birthYear;
        this.homeTown = homeTown;
    } // Các phương thức, khai báo trong thân class và nằm ngoài constructor
    // Không cần keyword function
    // phương thức
    showInfo(){
        return `${this.fullName} 
${this.ID} 
${this.birthYear} 
${this.homeTown}`;
    }
};
// Tạo đối tượng cho SinhVienDecor
const stu1 = new SinhVienDecor("Nguyễn Ha Ha", "23C39011", 2004, "Cần Thơ");
const stu2 = new SinhVienDecor("Huỳnh Không Tên", "23C39010", 2003, "Hà Nội");
console.log(stu1,stu2);

console.log(stu1.showInfo());
console.log(stu2.showInfo());

// Thêm phương thức sau khi đã có class
SinhVienDecor.prototype.calcAge = function (){
    return 2024 - this.birthYear;
}
console.log(`Tuổi của sinh viên ${stu1.fullName} là ${stu1.calcAge()}`);


