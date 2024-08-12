// Dom - removeChild and remove

// removeChild
// cú pháp: parentElement.removeChild(childElement)
// Chọn phần tử cần xóa
let childElm = document.querySelector("#item2");

// Chọn phần tử cha của phần tử cần xóa
let ul = document.querySelector("#list");

// Xóa phần tử
ul.removeChild(childElm);


// Hoặc cách 2 ngắn gọn hơn
let childElm2 = document.querySelector("#item1");
childElm2.parentElement.removeChild(childElm2);


// remove
// chọn phần tử cần xóa 
let childElm3 = document.querySelector("#item4");
childElm3.remove();