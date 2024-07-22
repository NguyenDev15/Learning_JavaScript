// Bài tập 7
// Tìm số nguyên tố 

while(true){
    let a = Number(prompt("Xin nhập vào một số nguyên dương a"));

    // check xem a có phải số nguyên dương và lớn hơn 0
    while(!Number.isInteger(a) || a <= 0 ){
    a = Number(prompt("Nhập sai, Nhập lại"));
    }
    // alert(`Giá trị a hợp lệ, a = ${a}`);

    // Kiểm tra số nguyên tố
    let isPrime = true;
    for(let i = 2; i < a; i++){
        if(a % i === 0){
            isPrime = false;
            break;
        }
    }
    // Hiển thị kq
   if(isPrime === true){
    alert(`${a} là số nguyên tố`);
   } else{
    alert(`${a} không là số nguyên tố`);
   }

   // Thoát chương trình nếu không nhập nữa
   let answer = prompt(`
   Bạn có muốn tiếp tục không ?
   Thoát nhập "no"
   Bấm phím bất kì để tiếp tục
   `);
   if(answer.toLowerCase() === "no"){
    break;
   }
}