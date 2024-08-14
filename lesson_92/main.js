// Keyboard events and events object

const input = document.getElementById("input");
input.addEventListener("keydown", () => {
    console.log("Keydown");
});
input.addEventListener("keyup", () => {
    console.log("Keyup");
});

// event object
input.addEventListener("keydown", (e) => {
    console.log(e);// hàm callback sẽ đưa tất cả thông tin về sự kiện xảy ra
});

// ví dụ nếu ng dùng nhập r thì thay đổi nền web
input.addEventListener("keydown", function(events){
    if(events.code === "KeyR"){ // nếu là events.code === "KeyR"
        document.body.style.background = "red";
    }
});