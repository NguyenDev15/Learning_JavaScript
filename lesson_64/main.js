// Object: Lập trình hướng đối tượng
// Tìm hiểu sâu hơn về Prototype và OOP

// Ở bài trước
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
console.log(sv1);

// Cách để xem nguyên mẫu cha mẹ (prototype) của đối tượng
console.log(`Kiểm tra đối tượng nguyên mẫu của đối tượng sv1`);
console.log(Object.getPrototypeOf(sv1)); // trả về thông tin cha, mẹ của "sv1"

// Mọi hàm đều có Prototype
console.log("Studen.prototype :");
console.log(Studen2.prototype);

// Check xem sv1 có phải là con của Studen2 hay không
console.log(Studen2.prototype === Object.getPrototypeOf(sv1));
// Nói cách khác
console.log(Studen2.prototype.isPrototypeOf(sv1));
/* trả về true vì thật sự sv1 là con của Studen2 */

// Thêm phương thức vào Student2.prototype
Studen2.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
}
sv2.calcAge();
sv1.calcAge();
/* Kết quả phương thức caclAge() nằm trong nguyên mẫu Studen2
Khi đó các đối tượng sv1, sv2 được kế thừa từ nguyên mẫu Studen2, đó chúng có thể truy
cập vào phương thức này
*/

// Thêm thuộc tính vào Student2.prototype
Studen2.prototype.email = "tuhoc.cccccc123@gmail.com";
console.log(sv1.email);
console.log(sv2.email);

/*Sau đây kiểm tra xem sv1, sv2 có thật sự làm chủ thuộc tính email không
hay chỉ là kế thừa. Dùng Object.hasOwnProperty("");
*/
console.log(sv1.hasOwnProperty("email")); // false vì chỉ được kế thừa
console.log(sv1.hasOwnProperty("fullName")); // true vì làm chủ thuộc tính



