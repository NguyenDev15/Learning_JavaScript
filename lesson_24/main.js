// Hoisting trong function

// 1. function declaration -> có hoisting, có thể gọi hàm trước khi định nghĩa
hoiStingFunction();
function hoiStingFunction(){
    console.log(`Hello guys lần 1`);
}

// 2. function expression và arrow function thì không có hoising
// Nên chỉ được gọi sau khi đã tạo hàm
// hoiStingFunction2(); - > Lỗi
let hoiStingFunction2 = function(){
    console.log(`Hello guys lần 2`);
}
hoiStingFunction2(); 
//////////
// hoiStingFunction3(); - > Lỗi 
let hoiStingFunction3 = () => {
    console.log(`Hello guys lần 3`);
}
hoiStingFunction3();