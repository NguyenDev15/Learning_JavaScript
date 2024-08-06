// Object Methods: Các phương thức có sẵn trong Js 
/*
1. Object.keys(obj)
2. Object.values(obj)
3. Object.entries(obj)
4. Object.assign(target,source)
5. Object.hasOwnPropery(prop)
6. Object.freeze(obj)
7. Object.seal(obj)
*/  


let person = {
    name : "haha",
    age : 10,
};

// 1. Object.keys(obj) -> trả về mảng chứa các key (tên thuộc tính)
let ojKeys = Object.keys(person);
console.log(ojKeys); // output: name,age

// 2. Object.values(obj) -> trả về mảng các value (giá trị của tên thuộc tính)
let ojValues = Object.values(person);
console.log(ojValues); // output: "haha", 10

// 3. Object.entries(obj) -> trả về mảng cả key và value nhưng ở dạng mảng con
let ojEntries = Object.entries(person);
console.log(ojEntries); //output: [[name,age], ["haha",10]]

// 4. Object.assgin(target,source) 
/* Sử dụng để sao chép các thuộc tính từ một hoặc
nhiều đối tượng nguồn (source) vào một đối tượng đích (target)
*/
let target = {c : 100};
let source1 = {a : 1};
let source2 = {b : 2};
Object.assign(target, source1, source2); // thêm source1 và source2 vào target
console.log(target); //output: c: 100, a: 1, b: 2
// Có thể sử dụng toán tử Spread[...] để sao chép thuộc tính
let target2 = {...source1,...source2};
console.log(target2);

// 5. Object.hasOwnPropery(prop) 
/* kiểm tra xem đối tượng có một thuộc tính nào đó hay không
nếu có thì trả về true
*/
let person2 = {
    name : "Binz",
    age : 30,
};
console.log(person2.hasOwnProperty("name")); // true
console.log(person2.hasOwnProperty("fullname")); // false

// 6. Object.freeze(obj) -> làm đóng băng đối tượng, làm cho nó không thể (thêm, sửa, xóa)
let person3 = {
    name : "Alo alo",
    age : 50,
};

Object.freeze(person3); // Không được thêm, sửa, xóa
// Thử sửa thuộc tính
person3.age = 100;
// Thử thêm thuộc tính
person3.email = "hahaha123@gmail.com";
// Thử xóa thuốc tính
delete person3.age;

console.log(person3);

// 7. Object.seal(obj) -> làm đóng băng không cho thêm hoặc xóa (chỉ cho sửa)
let person4 = {
    name : "Yamete Kudasai",
    age : 43,
};
Object.seal(person4); // chỉ được sửa, không được thêm và xóa
// Thử xóa
delete person4.name; // bỏ qua
// Thử thêm
person4.email = "132mbvvif@gmail.com"; // bỏ qua
// Thử sửa
person4.age = 100; // thành công

console.log(person4);

