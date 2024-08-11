// DOM - removeAttribute and hasAttribute

// Sử dụng querySelector để chọn phần tử đầu tiên có class là "list"
const item1 = document.querySelector(".list");
// hasAttribute để xem phần tử có thuộc tính nào hay không 
console.log(item1.hasAttribute("class"));

//  Sử dụng querySelector xem h1 có thuộc tính là style hay không
const item2 = document.querySelector("#heading_title");
// hasAttribute để xem phần tử có thuộc tính nào hay không 
console.log(item2.hasAttribute("style"));


// removeAttribute
// Loại bỏ 1 thuộc tính khỏi phần tử
item2.removeAttribute("style"); // từ màu đỏ xóa bỏ nên thành màu mặc định đen
// sau đó ktra lại bằng hasAttribute xem thuộc tính style có còn tồn tại không
console.log(`Sau khi xóa style và dùng hasAttribute thì: ${item2.hasAttribute("style")}`);


// Bài tâp ví dụ
// xóa tất cả thuộc tính href nằm trong ul a
const item3 = document.querySelectorAll("ul a");
item3.forEach((getHref)=>{
    getHref.getAttribute("href");
    getHref.removeAttribute("href");
    console.log(getHref);
})








 