// Phương thức reduce();
//cú pháp: array.reduce(function, [initialValue]);
// initialValue : giá trị khởi tạo

// bài toán không dùng reduce();
let M1 = [1,2,3];
let sum = 0;
for(let i of M1){
    sum += i;
}
console.log(`Tổng các phần tử trong mảng = ${sum}`);

// Khi dùng reduce(function, [initialValue]);
/*
accumulator : Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm
currentValue : Giá trị hiện tại đang xử lí trọng mảng 
currentIndex : (Tùy chọn) Chỉ số của phần tử đang xử lí
array : (Tùy chọn) mảng đang được reduce.   
*/
/*
THAM SỐ THỨ 2: InitialValue giá trị khởi tạo của accumulator ban đầu
- Nếu bỏ trống InitialValue:
    - 1. accumulator tích lũy sẽ lấy giá trị đầu tiên trong mảng làm giá trị khởi tạo,
        và sẽ bắt đầu thực hiện từ phần tử thứ 2    
    - 2. Nếu mảng trống mà không có giá trị InitialValue -> reduce() sẽ báo lỗi
*/

//let M1 = [1,2,3];
let sum2 = M1.reduce(
    //Tham số thứ 1: function
    (accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue;
    },
    // Tham số thú 2: initialValue
    0 //initialValue
);
console.log(sum2);


// Rút gọn lại phần hàm
let sum3 = M1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum3);