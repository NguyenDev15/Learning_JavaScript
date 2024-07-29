// Bài tập js
// Tách số và chữ khi người dùng nhập vào
// Ví dụ Abc123 thì tách ra Abc và 123

let tachChuoi = (a) =>{
    let letterResult = "";
    let numberResult = "";

    for(let i = 0; i < a.length; i++){
        let char = a[i];
        if(isNaN(char)){
            letterResult += char;
        }
        else{
            numberResult += char;
        }

    }
        return{letterResult, numberResult};
}


let a = prompt("Xin nhập vào số và chữ ngẫu nhiên");
let ketQua = tachChuoi(a);

alert(`Chuỗi sau khi tách:
${ketQua.letterResult}
${ketQua.numberResult}
`);