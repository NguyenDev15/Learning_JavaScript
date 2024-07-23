// Bài tập hàm  áp dụng với bài toán
// bài 2 tính delta

// Check a b c
let a = Number(prompt("Xin mời bạn nhập giá trị a"));
while(!Number.isInteger(a)){
    a = Number(prompt("Không hợp lệ, xin vui lòng nhập lại"));
}
let b = Number(prompt("Xin mời bạn nhập giá trị b"));
while(!Number.isInteger(b)){
    b = Number(prompt("Không hợp lệ, xin vui lòng nhập lại"));
}
let c = Number(prompt("Xin mời bạn nhập giá trị c"));
while(!Number.isInteger(c)){
    c = Number(prompt("Không hợp lệ, xin vui lòng nhập lại"));
}


// 1. Function declaration
function ptb2_1(a, b, c){
let delta= (b**2) - (4*a*c);

if(delta < 0){
    console.log("Phương trình vô nghiệm"); 
}else if(delta === 0){
    let x1 = (-b) / (2*a);
    console.log("Phương trình có nghiệm kép x1 = x2 = %s",x1);
}else if(delta > 0){
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    let x3 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có 2 nghiệm phân biệt x1 = %s và x2 = %s`,x2,x3);
    }
}
// Gọi hàm
console.log("Function declaration");
console.log(`
Giá trị a, b, c bạn nhập lần lượt là:
a = ${a}; b = ${b}; c = ${c}
`);
ptb2_1(a,b,c);


// 2. Function expression
let ptb2_2 = function (a, b, c){
    let delta= (b**2) - (4*a*c);
    
    if(delta < 0){
        console.log("Phương trình vô nghiệm"); 
    }else if(delta === 0){
        let x1 = (-b) / (2*a);
        console.log("Phương trình có nghiệm kép x1 = x2 = %s",x1);
    }else if(delta > 0){
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        let x3 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có 2 nghiệm phân biệt x1 = %s và x2 = %s`,x2,x3);
        }
    };
    // Gọi hàm
console.log("Function expression");
console.log(`
Giá trị a, b, c bạn nhập lần lượt là:
a = ${a}; b = ${b}; c = ${c}
`);
ptb2_2(a,b,c);


// 3. Arrow function
let ptb2_3 = (a, b, c) =>{
    let delta= (b**2) - (4*a*c);
    
    if(delta < 0){
        console.log("Phương trình vô nghiệm"); 
    }else if(delta === 0){
        let x1 = (-b) / (2*a);
        console.log("Phương trình có nghiệm kép x1 = x2 = %s",x1);
    }else if(delta > 0){
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        let x3 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có 2 nghiệm phân biệt x1 = %s và x2 = %s`,x2,x3);
    }
};
// Gọi hàm
console.log("Arrow function");
console.log(`
Giá trị a, b, c bạn nhập lần lượt là:
a = ${a}; b = ${b}; c = ${c}
`);
ptb2_3(a,b,c);