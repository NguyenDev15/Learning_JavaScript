// Dom - getAttribute and setAttribute

// dùng querySelector để chọn thẻ a đầu tiên
const firstLink = document.querySelector("a");
console.log(firstLink);
// getAttribute
if(firstLink){
    const linkHref = firstLink.getAttribute('href');
    console.log(linkHref);
}
else{
    console.log('Không tìm thấy kết quả');
}

// setAttribute
firstLink.setAttribute("target","_blank"); /* khi nhấp vào link thì sẽ tạo một trang mới
và nhảy đến trang đó. Còn bth thì sẽ nhảy tại chỗ không tạo trang mới
*/

// sử dụng querySelectorAll để truy cập đến tất cả thẻ a trong ul
const link = document.querySelectorAll("ul a");
console.log(link);
// Lập qua mỗi thẻ a và sử dụng setAttribute
// để thêm thuộc tính target="_blank"
link.forEach((singleLink)=>{
    singleLink.setAttribute("target","_blank");
})

// Ví dụ đổi màu style của h1 từ màu đỏ sang màu xanh dương
document.querySelector("#heading_title").setAttribute("style", "color: blue;");
