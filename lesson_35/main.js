// Bài tập string

//1.
// Viết chương trình ktra password
// Hợp lệ ít nhất 6 kí tự
// Chứa ít nhất 1 kí tự thường
// Chứa ít nhất 1 kí tự hoa
// Chứa ít nhất 1 chữ số

//1.2
// Cho người dùng nhập vào mật khẩu để login / so sánh
// nếu đúng mở cửa, sai quá 5 lần khóa đăng nhập và thoát chương trình




let dieuKien = (password) => {
    if(password.length < 6){
        return false;
    }


    let toUpperCount = false;
    let toLowerCount = false;
    let numberCount = false;


    for(let i = 0; i < password.length; i++){
        char = password[i];

        if(char >= "a" && char <= "z"){
            toLowerCount = true;
        }
        else if(char >= "A" && char <= "Z"){
            toUpperCount = true;
        }
        else if(char >= "0" && char <= "9"){
            numberCount = true;
        }
    }
    return toLowerCount && toUpperCount && numberCount;
}

// Set mật khẩu
let setPassWord = () =>{
    let password = prompt("Thiết lập mật khẩu");

    if(dieuKien(password)){
        alert(`Đặt mật khẩu thành công. Mật khẩu là ${password}`)
        return password;
    }else{
        alert(`Mật khẩu không hợp lệ!`);
        // Gọi lại hàm set mật khẩu đến khi đúng
        setPassWord();
    }
}
// Thỏa điều kiện và sau đó gán giá trị
let passwordOK = setPassWord();


let count = 0;
while(true){
    let passwordLogin = prompt("Nhập vào mật khẩu để login");
    if(passwordLogin === passwordOK){
        alert("Bạn đã login thành công");
    }
    else{
        count++;
        if(count < 5){
        alert(`Bạn nhập sai, số lần thử ${count}/5`);
        }else{
        alert(`Bạn đã thử hết lượt, khóa login, hãy liên hệ admin`);
        break;
        }
    }
}


