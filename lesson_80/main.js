// DOM - Thao tác với ClassList
/*
classList.add() thêm một lớp mới vào phần tử
classList.remove() xóa một lớp khỏi phần tử 
classList.toggle() loại bỏ một lớp nếu nó tồn tại và thêm nó nếu chưa có
classList.replace() thay thế một lớp cũ bằng một lớp mới
classList.contains() kiểm tra phần tử có chứa một lớp cụ thể không
*/

// lấy phần tử cần tương tác
let element = document.getElementById("myElement");

// Thêm một lớp mới vào phần tử
element.classList.add("newClass");

// kiểm tra phần tử có chứa một lớp cụ thể không
console.log(element.classList.contains("myClass"));

// xóa một lớp khỏi phần tử 
element.classList.remove("myClass");

// sau đó kiểm tra phần tử có chứa một lớp cụ thể không
console.log(element.classList.contains("myClass"));

// thay thế một lớp cũ bằng một lớp mới
element.classList.replace("newClass", "abc");

// loại bỏ một lớp nếu nó tồn tại và thêm nó nếu chưa có
element.classList.toggle("toggleClass");
element.classList.toggle("toggleClass");
element.classList.toggle("toggleClass");
// thuộc tính này xen kẻ nhau lần đầu gọi ra sẽ thêm
// lần sau gọi lần nữa thì tự xóa
// tiếp tục những lần sau vẫn tự xen kẻ
// thêm -> xóa -> thêm -> xóa,....

// Xem các class trong phần tử
console.log(element.classList);
