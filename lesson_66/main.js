// Object: Lập trình hướng đối tượng
// Instance Methods và Static Methods

// instance Methods
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    // instance methods
    draw(){
       console.log(`Phương thức draw được gọi`);   
    }

    // static methods
    static calcArea(radius){
        return Math.PI * (radius**2);
    }
}
// Tạo đối tượng
const c1 = new Circle(10);
const c2 = new Circle(6);

c1.draw();
c2.draw();
/* Vậy phương thức instance là phương thức thể hiện
mà các phương thức này phải tạo ra đối tượng
sau đó từ đối tượng mà gọi đến nó */

// Static Methods
console.log(Circle.calcArea(10));
console.log(Circle.calcArea(15));


/* 
- Vậy instance methods sẽ được dùng với đối tượng cụ thể và sử dụng
các phương thức lên từng đối tượng cụ thể
- Còn với Static Methods thì áp dụng lên cả lớp không cần phải có 
đối tượng cụ thể không cần phải tạo đối tượng
*/
