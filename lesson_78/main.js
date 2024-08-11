// Dom style

// Chọn phần tử h1 bằng querySelector
let heading = document.querySelector("h1");
// Thay đổi style của .heading trên giao diện
// heading.style.backgroundColor = "orange";
// heading.style.color = "cyan";
// heading.style.fontSize = "1rem";

// Cách viết gọn nhiều thuộc tính 
Object.assign(heading.style,{
    backgroundColor: "cyan",
    fontSize: "1rem",
    // cách này sẽ bất lợi khi không nhớ tên thuộc tính vì không có gợi ý
});
