// Object: Lập trình hướng đối tượng
//Prototype trong javascript

// Khai báo mảng
let M1 = new Array();
console.log(typeof M1);
console.log(M1);
/*
ObjectBase là gốc của tất cả các đối tượng trong Js
Trong Js mỗi đối tượng đều có một nguyên mẫu cha mẹ (Prototype)
Có thể xem ObjectBase là Ông Bà, còn Prototype là Cha Mẹ
Nên khi lần đến tận cùng của Object sẽ không có nguyên mẫu (Prototype)
*/
/*
ví dụ ở trên M1[] sẽ là con của Array, tức Array là nguyên mẫu Prototype.
Khi mở Prototype và lần đến dưới sẽ thấy ObjectBase và sẽ không còn Prototype nào 
xuất hiện nữa.
Nên có thể xem M1[] là con của Array và là cháu của ObjectBase
*/






