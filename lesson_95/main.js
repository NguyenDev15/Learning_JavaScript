// Event - Input and Change Events

// change event: sự kiện xảy ra khi giá trị thay đổi và mất focus
const userName = document.getElementById("name");
// userName.addEventListener("change", (e) => {
//     console.log(e.target.value);
// });


// Input event: đây là sự kiện mà trình duyệt 
// kích hoạt khi người dùng thực hiện bất kì hành động
// nhập liệu nào trên một phần tử HTML
userName.addEventListener("input", (e) => {
    console.log(e.target.value);

    const hi = document.querySelector("#hi");

    hi.textContent = e.target.value;
});