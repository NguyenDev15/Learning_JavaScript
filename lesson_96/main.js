// Event - Event Bubbling - stopPropagation

const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

child.addEventListener("click", (e) => {
    e.stopPropagation(); // dùng để ngăn ngặn sự kiện lan ra thẻ cha
    console.log("Children click");
});

parent.addEventListener("click", (e) => {
    e.stopPropagation(); // dùng để ngăn ngặn sự kiện lan ra thẻ cha
    console.log("Parent click");
});

grandparent.addEventListener("click", (e    ) => {
    // đây là thẻ cha lớn nhất
    console.log("Grandparent click");
});

// stopPropagation dùng để ngăn các sự kiện khi click vào thẻ con
// mà lan các thẻ cha con khác lồng nhau rất nhiều
// nên khi sử dụng stopPropagation thì chỉ lắng nghe đúng nơi đúng chỗ click mà thôi