// 

let btn = document.querySelectorAll(".btn");

for(let i of btn){
    if(i instanceof HTMLElement){
        i.style.backgroundColor = "blue";
        i.innerHTML = "Click Me";
        i.style.fontSize = "2em";
        i.style.color = "yellow";
    }
}

// Tổng hợp kiến thức 
/* 
Thuộc tính .style cho phép thay đổi các Css của phần tử HTML
Thuộc tính .style cho phép truy cập xem inline Css của phần tử
tức là css ngay tại trong dòng của phần tử chứ không phải file css riêng 
Nên chúng ta muốn xem được thuộc tính mà Css nằm ở file riêng thì sử dụng
window.getComputedStyle.(kiểu thuộc tính) 
*/
