// Bài tập js
// Viết chương trình nhập vào năm sinh và in ra số tuổi
// Kiểm tra điều kiện dữ liệu năm sinh nhập vào phải là số nguyên và lớn hơn 0

let nhapLieu = Number(prompt("Xin mời nhập năm sinh của bạn"));
while(!Number.isInteger(nhapLieu) || nhapLieu <= 0 ){
    nhapLieu = Number(prompt("Năm sinh không hợp lệ, phải là số nguyên lớn 0"));
}

function namSinh(nhapLieu){
    let currentDate = new Date().getFullYear();
    let tinhTuoi = currentDate - nhapLieu;
    
    return tinhTuoi;
}

alert(`Tuổi của bạn là ${namSinh(nhapLieu)}`);