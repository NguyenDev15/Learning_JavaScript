// Bài tập 6
// Ktra có phải số hoàn hảo nhập từ bàn phím
// Tìm số hoàn hảo từ 1 - 1000

let n = Number(prompt("Xin mời nhập 1 số từ 1 đến 1000"));
while(!Number.isInteger(n) || n < 1 || n > 1000){
    n = Number(prompt("Nhập sai, nhập lại!"));
}

let count = 0;
let sum = 0;
for(let i = 1; i < n; i++){
    if(n % i === 0){
        count++;
        console.log(`Số thứ %s là: %s`,count,i);
        sum += i;
    }
}

if( sum === n ){
    console.log(`${n} là số hoàn hảo`);
}else{
    console.log(`${n} không là số hoàn hảo`);
}

