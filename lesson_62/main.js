// Object: Lập trình hướng đối tượng
// Hàm tạo và Constructor

// Function() constructor : Hàm tạo - sử dụng để tạo khuôn mẫu (prototype)
// Viết hoa chữ cái đầu để phân biệt với các hàm thông thường

// Cách 1: function expresstion (ít dùng)
let Studen1 = function(fullName, ID, birthYear, homeTown){
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


// Cách 2: function declaration (thường dùng)
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
const sv3 = new Studen2("Nguyễn Văn C", "001300", 2005, "Tp.Hcm");

// Truy cập thuộc tính và phương thức của đối tượng
console.log(sv1["fullName"]); // Bracket Notation
console.log(sv2.fullName); // Dot Notation
console.log(sv1.showInfo());

// sv1, sv2 và sv3 có thể gọi là các đối tượng cụ thể, hoặc gọi là các instance (thể hiện)
let abc = 0;
console.log(`Kiểm chứng instance`);
console.log(sv1 instanceof Studen2);
console.log(abc instanceof Studen2);

// Thêm, sửa, xóa thuộc tính
sv2.email = "tuhoc.cc@gmail.com";
sv2.fullName = "Nguyễn Văn ABC";
delete sv2.homeTown;
console.log(sv2);




