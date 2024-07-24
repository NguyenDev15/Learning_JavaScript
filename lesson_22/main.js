// Phạm vi sử dụng Scope - JavaScript Scope 
// 1. Global scope -> phạm vi toàn cục, toàn thể (lớn nhất)
// 2. Function scope -> phạm vi của hàm
// 3. Block scope -> phạm vi của khối, ví dụ như một if{} hoặc loop{} -> {}

// Global scope có thể xem như là lớn nhất có thể truy xuất được mọi nơi
let  a = 1;
// Xuất thử biến a
console.log(a);
let viDu1 = (a) =>{
    // Có thể truy xuất biến Global trong hàm
    console.log(a);
    // Thử với phạm vi Block scope
    if(a % 2 === 0){
        console.log(`${a} là số chẵn`);
    }else{
        console.log(`${a} là số lẻ`);
    }
}
// Gọi hàm 
viDu1(a);


// Function scope có thể coi là truy xuất trong phạm vi hàm nếu ngoài hàm thì lỗi
let viDu2 = () =>{
    let b = 2;
    // Biến b chỉ có thể truy xuất ở trong hàm 
    console.log(b);
    // Truy xuất các cấp sâu hơn bên trong
    if(b % 2 === 0){
        console.log(`${b} là số chẵn`);
    }else{
        console.log(`${b} là số lẻ`);
    }
}
// gọi hàm
viDu2();


// Block scope là phạm vi trong {}
let c = 3;
if(c === 3){
    let d = 5
    if( d % 2 === 0){
        console.log(`${d} là số chẵn`);
    }else{
        console.log(`${d} là số lẻ`);
    }
}