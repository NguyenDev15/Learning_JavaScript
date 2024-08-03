// Bài tập js

/* Viết chương trình taọ 1 mảng 1 chiều gồm các phần tử là số nguyên,
có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím
2. Xuất các giá trị trong mảng
3. Đảo ngược mảng và xuất mảng sau khi đảo ngược 
4. Sắp xếp mảng tăng dần
5. Tính tổng các phần tử trong mảng 
6. Cho người dùng nhập vào số bất kì, ktra số đó có tồn tại
trong mảng hay không, nếu có xuất ra vị trí index trong mảng
*/

// Hàm random
function createRandomArray(n){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

let n = parseInt(prompt("Nhập vào số phần tử của mảng"));
//ket qua cua mảng random
let ketQua = createRandomArray(n);
console.log(`Các giá trị ngẫu nhiên trong mảng [${ketQua}]`);

// Mảng đảo ngược
let reverseArray = ketQua.slice().reverse();
console.log(`Mảng đảo ngược là [${reverseArray}]`);

// Sắp xếp mảng tăng dần
function sortArray(ketQua){
    return ketQua.sort((a,b) => a - b);
}
let ascendingArray = sortArray([...ketQua]);
console.log(`Mảng theo thứ tự tăng dần là [${ascendingArray}]`);

// Tính tổng các số trong mảng bằng reduce();
function reduceArray (ketQua){
    return ketQua.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        ,0);
}
let sum = reduceArray([...ketQua]);
console.log(`Tổng của mảng = ${sum}`); 

// Tìm vị trí index khi người dùng nhập vào
let searchIndex = parseInt(prompt("Xin nhập giá trị cần tìm kiếm"));
let locationIndex = ketQua.indexOf(searchIndex);
if(locationIndex === -1){
    console.log(`Không tìm thấy giá trị trong mảng`);
}
else{
    console.log(`Vị trí index của ${searchIndex} = ${locationIndex}`);
}
