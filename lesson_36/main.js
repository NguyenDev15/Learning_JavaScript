
// Bài tập js: mã hóa khi người dùng nhập vào
// const a="abcdefghijklmnopqrstuvwxyz"   
// const b="zxcvbnmasdfghjklqwertyuiop" 

let kiemTra = (message = xuatTinNhan) =>{
    let result = "";
    const a="abcdefghijklmnopqrstuvwxyz";
    const b="zxcvbnmasdfghjklqwertyuiop";

    for(let i = 0; i < message.length; i++){
        char = message[i].toLowerCase();
        
        if(a.includes(char)){ // ktra xem char có nằm trong a hay không, có thì thực hiện chuyển đổi
            let index = a.indexOf(char);
            result += b[index];
        }
        else{
            result += char;
        }
    }
    return result;
}

let xuatTinNhan = prompt("Mời nhập vào tin nhắn cần mã hóa");
let ketQua = kiemTra(xuatTinNhan);
alert(`Tin nhắn sau khi mã hóa: ` + ketQua);