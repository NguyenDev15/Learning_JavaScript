// Bài tập js
// Viết ctrinh đếm ngược thời gian theo từng giây 
// ví dụ tgian làm bài 45p nếu chạy về 0 thông báo hết tgian

function demTgian(minutes){
    alert(`Thời gian làm bài của bạn là ${minutes} phút`);
    let seconds = minutes * 60;


    let demTgianInterval = setInterval(function(){
        let minutesLeft = Math.floor(seconds / 60);
        let secondsLeft = seconds % 60;

        // thêm số 0 ở trước khi < 10 (01,02,04,....)
        let prefixSeconds = secondsLeft < 10 ? "0" : ""; // quy tắc 3 ngôi
        // Xuất phút và giây
        console.log(`${minutesLeft} : ${prefixSeconds}${secondsLeft}`);

        if(seconds <= 0){
            clearInterval(demTgianInterval); // khi bằng 0 thì ngừng 
            alert("Hết thời gian làm bài");
        }
        else{
            seconds--;
        }
    },1000); 


    
}

let minutes = Number(prompt("Mời nhập vào thời gian làm bài"));
demTgian(minutes);