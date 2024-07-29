// Bài tập js 
// Đếm từ tôi trong chuỗi
// const a = "tôi chăm học tôi chịu khó tôi đẹp trai";

let demChuoi = (a) =>{
    const demTuToi = "tôi";
    let count = 0;
    for(let i = 0; i < a.length; i++){
        if(a.slice(i, i+demTuToi.length) === demTuToi){ 
        // i = 0 sau đó i + cho chiều dài của demTuToi là 3 - 1 = 2 ( đếm từ index 0 )

            count++;
        }
    }
    return count; // trả về giá trị đếm từ tôi trong chuỗi
}

let a = prompt("Mời nhập vào chuỗi có từ tôi").toLowerCase();
let ketQua = demChuoi(a);

alert(`Tổng từ tôi trong chuỗi là ${ketQua}`);
