// Date Set Methods, định dạng và xuất thời gian 
// Set tgian theo ý muốn 

// Cách 1 => new Date(từ lớn đến bé -> từ năm đến mili giây)
const myDate = new Date(2024, 7, 29);
console.log(myDate);
console.log(myDate.toLocaleDateString()); // Output -> 29/7/2024

// Cách 2 => new Date(kiểu chuỗi)
const myDate1 = new Date("2020-08-04T12:00:05");
console.log(myDate1);
console.log(myDate1.toLocaleDateString());
// "T" là phân cách giữa ngày và giờ

// Cách 3 => Sử dụng SetFullYear, SetMont, SetDate
let myDate2 = new Date();
myDate2.setFullYear(2024);
myDate2.setMonth(6);
myDate2.setDate(7);
console.log(myDate2);
console.log(myDate2.toLocaleDateString());

// Xuất ngày tháng theo định dạng mong muốn ( tự code )
console.log(`
Ngày ${myDate2.getDate()} / Tháng ${myDate2.getMonth() + 1} / Năm ${myDate2.getFullYear()}
`)

//Thêm số 0 trước ngày tháng nếu nhỏ hơn 10
let prefixDate = myDate2.getDate() < 10 ? "0" : "";
let prefixMonth = myDate2.getMonth() < 9 ? "0" : "";
console.log(`
Ngày ${prefixDate}${myDate2.getDate()} / Tháng ${prefixMonth}${myDate2.getMonth() + 1} / Năm ${myDate2.getFullYear()}
`)
