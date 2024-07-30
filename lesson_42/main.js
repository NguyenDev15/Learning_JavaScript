// setInterval trong Js
/* Cú pháp
setInterval(function, milliseconds, param1, param2, ...);
** Khác với setTimeout là setInterval lặp đi lập lại trong khoảng tgian được set
còn setTimeout là chỉ hiện ra chậm hơn với tgian được set */

// ví dụ 1
function noTiFy(){
    console.log(`Bạn có ** tin nhắn chưa đọc`);
}

// setInterval(noTiFy, 3000);

// ví dụ 2
function upDateTime(){
    let currentTime = new Date();
    console.log(currentTime);
}
// setInterval(upDateTime, 1000);

// Phần 2: Hủy lập
let counter = 0;
let count = ()=>{
    console.log(counter++); 
    if(counter === 5){
        clearInterval(stopInterval);
    }  
}
let stopInterval = setInterval(count, 1000);
