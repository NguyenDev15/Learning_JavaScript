// Bài tập 4
// Chia hết cho 3 từ khoảng 10 đến 50
let count = 0;
for(let i = 10; i <= 50; i++){
    if(i % 3 === 0){ 
        count++;
        console.log(`Các số chia hết cho 3 từ 10 đến 50 thứ %s = %s`,count,i);
    }
}


