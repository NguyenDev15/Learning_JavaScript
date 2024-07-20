
// Check số hoàn hảo từ 1 đến 1000
for(let n = 1; n <= 1000; n++){
    let sum =0;
    for(let i = 1; i < n; i++){
        if(n % i === 0){
            sum += i;
        }
    }
    // so sánh xem n có bằng tổng không
    if( sum === n ){
        console.log(`${n} là số hoàn hảo`);
    }
}
