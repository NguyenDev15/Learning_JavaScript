// Bài tập về Object:
// Tính diện tích hình vuông và hình chữ nhật 
// Sử dụng mô hình kế thừa class

class Shape {
    constructor(name){
        this.name = name;
    }
    // phương thức
    calcArea(){
        return 0;
    }
}

// Hình vuông
class Square extends Shape {
    constructor(name, side){
        super(name); // gọi thuộc tính từ lớp Cha
        this.side = side;
    }
    // Phương thức tính diện tích hình vuông
    calcArea(){
        return this.side ** 2;
    }
}

// Hình chữ nhật
class Rectangle extends Shape {
    constructor(name, withd, height){
        super(name); // gọi thuộc tính từ lớp Cha
        this.withd = withd;
        this.height = height;
    }
    // Phương thức tính diện tích hình chữ nhật
    calcArea(){
        return this.withd * this.height;
    }
}

// Tạo đối tượng hình vuông
const dtHvuong = new Square("Dt Hình vuông", 5);
console.log(`${dtHvuong.name} = ${dtHvuong.calcArea()}`);
// Tạo đối tượng hình chữ nhật
const dtHchunhat = new Rectangle("Dt hình chữ nhật", 5, 10);
console.log(`${dtHchunhat.name} = ${dtHchunhat.calcArea()}`);
