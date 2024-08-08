// Object: Lập trình hướng đối tượng
// Inheritance ES6

// Lớp School
class School {
    constructor(id, name, birthYear){
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    }
    // phương thức
    calcAge(){
        return 2024 - this.birthYear;
    }
}

// Lớp Studen kế thừa từ lớp School (thêm thuộc tính và phương thức riêng)
class Student extends School {
    constructor(id, name, birthYear, major){
        super(id, name, birthYear);
        this.major = major;
    }
    
    // Phương thức của lớp studen
    calcStudy(){
        console.log(`${this.name} is studying ${this.major}`);
    }
}


// Tạo đối tượng của lớp School
const p1 = new School ("P001", "Trần Như Nhộng", 2008);
// Truy cập phương thức và thuộc tính của class School
console.log(p1.name);
console.log(p1.calcAge());

// Tạo đối tượng của lớp Studen
const s1 = new Student("S001", "Nguyễn Gì Đó", 2001, "CNTT");
// Truy cập thuộc tính của lớp Student 
console.log(s1.major);
s1.calcStudy();

console.log(s1);







