// Object: Lập trình hướng đối tượng
// Getter và Setter

class School {
    constructor(id,name,birthYear,score){
        this.name = name;
        this.id = id;
        this.birthYear = birthYear;
        this._score = score;
    // Thêm dấu _ vào trước tên thuộc tính để thể hiện nó ở trạng thái protected,
    // và không nên truy cập, sửa đổi trực tiếp từ bên ngoài
        }
    calcAge(){
        return 2024 - this.birthYear;
    }

    // Getter cho thuộc tính score
    get score(){
        return this._score;
    }
    // Setter cho thuộc tính score
    set score(value){
        // thêm các biểu thức logic để kiểm tra giá trị
        if(value >= 0 && value <= 100){
            this._score = value;
        }
        else{
            console.log(`Điểm số không hợp lệ`);
        }
    }
}

// Tạo đối tượng từ class School
const st1 = new School("0102B", "Trần Như Nhộng", 2004, 95);
console.log(st1.name);
console.log(st1.id);
console.log(st1.birthYear);

console.log(st1._score); // Quy ước chung là khi có dấu _ thì không nên truy cập trực tiếp
// mà phải thông qua Getter hoặc Setter, nhưng vẫn có quyền truy cập trực tiếp bth  
