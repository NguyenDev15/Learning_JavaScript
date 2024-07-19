// Bài tập 3
console.log("BÀI TẬP VÒNG LẶP");

// Check n 
let n = Number(prompt("Xin mời nhập số lẻ"));
while(!Number.isInteger(n) || n < 0 || n % 2 === 0 ){
    n = Number(prompt("Nhập sai, Nhập lại"));
}
let soChan = 0;
    for(let i = 0; i <= n; i++){
        if(i % 2 !== 0){
            if(i === 3){
                continue;
            }
            soChan += i;
        }
    }
alert(`Tổng các số lẻ = ${soChan}`);
