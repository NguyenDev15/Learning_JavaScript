// Dom - querySelector and querySelectorAll

// querySelector
// chọn phần tử có id là heading_tile và thay đổi nội dung
let title = document.querySelector("#heading_title")
console.log(title);
title.innerHTML = "New Title";

// Chọn phần tử đầu tiên có lớp là list
let firstListItem = document.querySelector(".list");
console.log(firstListItem);
firstListItem.innerHTML = "Đã thay đổi";

// Chọn phần tử input checkbox và đặt thành checked
let checkbox = document.querySelector("input");
checkbox.checked = true;


// querySeclectorAll
let list_item = document.querySelectorAll("li");
console.log(list_item);
// Thay đổi phần tử tại vị trí index 2  
list_item[2].innerHTML = "Liên hệ với chúng tôi";

/* 
- đối với querySelector thì chỉ truy cập được tới phần tử đầu tiên nó tìm thấy
- còn querySelectorAll thì trả về một mảng gồm các phần tử được đưa vào
nếu có thay muốn thay đổi thì phải đưa vị trí index và đổi
*/

