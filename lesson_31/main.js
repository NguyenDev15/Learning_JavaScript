// indexOf, lastIndexOf, includes
// Tìm kím giá trị index trong chuỗi nếu không tìm thấy trả về -1;

// string.indexOf(searchValue, fromIndex);
let a = "abcdefg abcdefg";
let a1 = a.indexOf("d"); // bắt đầu tìm từ vị trí thứ 0 trở về sau
console.log(a1);
// Tìm từ vị trí index khác
let a2 = a.indexOf("a", 5); // bắt đầu tìm từ vị trí thứ 5 trở về sau
console.log(a2);


// // string.lastIndexOf(searchValue, endIndex);
let b = "abcdefg abcdefg";
let b1 = b.lastIndexOf("g"); // vị trí cuối cùng mà chuỗi xuất hiện
console.log(b1);
// Khi không cho giá trị endIndex thì js tự trả về cuối chuỗi
// Còn khi nhập thì sẽ tìm bắt đầu từ vị trí đó và có thể trở về trước
let b2 = b.lastIndexOf("a", 8); // tìm từ vị trí t8 trở về trước
let b3 = b.lastIndexOf("a", 7); // tìm từ vị trí thứ 7 trở về trước
console.log(b2);
console.log(b3);


// string.includes(searchValue, fromIndex)
let c = "abcdefg abcdefvnfgdfgdaw";
let c1 = c.includes("e"); // nếu có value trong chuỗi trả về true ngược lại trả false
console.log(c1);
// Tìm kiếm bắt đầu tự vị trí inDex khác
let c3 = c.includes("c", 11); // từ vị trí 11 trở về sau kco nên trả false
console.log(c3);    