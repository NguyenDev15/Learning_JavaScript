// Phương thức sort()

// khi không truyền compareFunction
let M1 = ["b","a","c"];
// để xem giá trị unicode ta dùng charCodeAt()
console.log("b".charCodeAt()); // có thể so sánh với bảng mã ASCII
// Duyệt mảng để xem và xuất giá trị unicode 
for(let i of M1){
    console.log(`${i} có mã unicode là ${i.charCodeAt()}`);
}

let sortM1 = M1.sort(); // sắp xếp lại theo unicode
console.log(sortM1);


// Trường hợp 2: phần tử có nhiều ký tự
// so sánh các kí tự đầu để xắp sếp 
let M2 = ["bab","a","c"]; // so sánh bằng chữ cái đầu tiên "bab" = "b"
let sortM2 = M2.sort(); // sắp xếp theo thứ tự unicode
console.log(sortM2);

// Ví dụ với ký tự số (vì sắp xếp theo unicode nên kq sẽ không như mong muốn)
let M3 = [1000,1,5]; 
let sortM3 = M3.sort();
console.log(sortM3); // output 1,1000,5



// Hàm so sánh (CompareFunction);
// nếu CompareFunction(a,b) trả về giá trị < 0, a sẽ đứng trước b
// nếu CompareFunction(a,b) trả về giá trị = 0, a và b không đổi
// nếu CompareFunction(a,b) trả về giá trị > 0, b sẽ đứng trước a 
let M4 = [8,5,2,7];
// Trước khi thay đổi
console.log(M4);
// Sắp xếp tăng dần
let sort1M4 = M4.sort((a,b) => a - b);
console.log(sort1M4);
// Sắp xếp giảm dần
let sort2M4 = M4.sort((a,b) => b - a);
console.log(sort2M4);