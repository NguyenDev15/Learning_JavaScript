// for Loop
// vi du 1
console.log("Ví dụ các For Loop");

for(let i = 0; i < 5; i++){
    console.log(i);
}

// ví dụ 2: Xuất giá trị chẵn từ 0 đến 10

for(let i = 0; i <= 10; i+=2){
    console.log(i); 
}

// ví dụ 3: tính tổng số chẵn từ 0 đến 10
let tong = 0;
for(let i = 0; i <= 10; i+=2){
    tong += i;
}
console.log(`Tổng các số chẵn từ 0 đến 10 = %s`,tong);

// Cách sử dụng break và continue để thoát khỏi Loop
// ví dụ
console.log("Continue và Break");

let a = 0;
while(a < 100){
    a++;
    if(a === 5){
        break;
    }
    console.log(a);
}
console.log("----------------------------------------------");
for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        continue;
    }else{
        console.log(i);
    }
}





