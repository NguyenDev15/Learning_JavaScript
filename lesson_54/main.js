// Bài tập Js Array

/*Viết chương trình tạo mảng 1 chiều gồm các phần tử số nguyên có n phần tử,
n do người dùng nhập từ bàn phím*/

function createArray(){
let array = [];
let n;

while(true){
    n = Number(prompt("Xin mời nhập chiều dài của mảng"));

    if(Number.isInteger(n) || n > 0){
        break;
    }
    else{
        alert(`Không hợp lệ, vui lòng nhập lại`);
    }
}

    for(let i = 0; i < n; i++){
        let currentValue = Number(prompt(`Nhập giá trị tại phần tử thứ ${i + 1}`));

        if(isNaN(currentValue)){
            alert(`Vui lòng nhập một số hợp lệ`);
            return;
        }
        array.push(currentValue);
    }
    console.log(`Mảng đã nhập [${array}]`);
};

createArray();