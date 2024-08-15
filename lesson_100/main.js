const progress =  document.getElementById("progress");
const prev =  document.getElementById("prev");
const next =  document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentActive = 1;

next.addEventListener("click", () => {
    changeStep(1);// tăng bước lên 1
});

prev.addEventListener("click", () => {
    changeStep(-1); // giảm bước đi 1
});

function changeStep(step){
    currentActive += step;

    update();
}

function update(){
    // duyệt qua các phần tử của step
    steps.forEach((step, idx)=>{
        if(idx < currentActive){
            step.classList.add("active");
        }
        else{
            step.classList.remove("active");
        }
    });

    // Bật hoặc tắt các nút dựa trên giá trị currentActive
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === steps.length;

    // Cập nhật chiều rộng của thanh tiến trình
    progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
}