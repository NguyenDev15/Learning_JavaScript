// Bài tập về Loop
console.log("BÀI TẬP VÒNG LẶP");

// Bài tập 2 
// Nhập vào và ktra a sau đó tính tổng các số chẵn và tính tổng các số lẻ 
let a = Number(prompt("Xin mời nhập số nguyên"));
while(!Number.isInteger(a) || a < 0){
    a = Number(prompt("Nhập sai, Nhập lại"));
}

if(a % 2 === 0){
    let sum = 0;
    for(let i = 0; i <= a; i+=2){
        sum+=i;
    }
    console.log(`Tổng các số chẵn = ${sum}`);
}else if(a % 2 !== 0){
    let sum2 = 0;
    for(let i = 0; i <= a; i++){
       if(i % 2 !==0){
        sum2 += i;
       }
    }
    console.log(`Tổng các số lẻ = ${sum2}`);
}