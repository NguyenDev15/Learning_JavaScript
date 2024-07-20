// Bài tập 5
// Tính S = 1! + 2! + ..... 10!


let sum = 0;
for(let n = 1; n <= 10; n++){
    let giaiThua = 1;
    for(let i = 1; i <= n; i++){
        giaiThua *= i;
    }
    console.log(`%s! = %s`,n,giaiThua);
    sum += giaiThua;
}
console.log(`S = %s`,sum);



