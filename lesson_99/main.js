// Event Mini Project

const panel = document.querySelectorAll(".panel");

panel.forEach((e) => {
    // xuất giá trị e để xem
    console.log(e);
    // lắng nghe sk click
    e.addEventListener("click", () => {
        // xóa active
        removeActive();
        // thêm active
        e.classList.add("active");
    });
});

function removeActive(){
    // duyệt qua từng phần tử panel
    panel.forEach((e) => {
        // xóa class
        e.classList.remove("active");
    });
}