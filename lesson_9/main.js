// While Loop
console.log("Vòng lập While");

let i = 1;
while ( i <= 5 ){
    console.log(i);
    i++;
}
// Ví dụ While Loop
let n = prompt("Nhập vào số nguyên từ 1 đến 99");

while(isNaN(n) || n < 1 || n > 99 || n % 1 !== 0){
    n = Number(prompt("Vui lòng nhập lại số nguyên từ 1 đến 99"));
}
alert("Bạn đã nhập số n = " + n);



// do whlie Loop
console.log("Vòng lặp Do While");

let y = 1;
do{
    console.log(y);
    y++;
}while(y <= 10);


// while(true) Loop
console.log("While(true)");
let a = 0;
while(true){
    a++;
    console.log(a);
    if(a === 10){
        break;
    }
}