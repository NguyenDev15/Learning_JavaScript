// preventDefault - Form Events
// dùng để ngăn chặn ví dụ như khi login gmail trong google 
// khi người dùng cố tình nhập sai thì thông báo tại trang 
// chứ không cần phải nhảy sang trang khác để xử lí

const form = document.querySelector("#login");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form đã được submit");
});

// Tóm lại preventDefault method sẽ ngăn chặn hành vi mặc định của 1 sự kiện 
// ví dụ điển hình là ngăn không cho form chuyển hướng khi submit