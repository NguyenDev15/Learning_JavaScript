// DOM - textContent, innerHTML, innerText

// Chọn đến phần tử có id là demo
let elm = document.getElementById("demo");

// textContent
console.log("textContent");
console.log(elm.textContent);

// innerHTML
console.log("innerHTML");
console.log(elm.innerHTML);

// innerText
console.log("innerText");
console.log(elm.innerText);

// Chọn đến phần tử có id là demo2
let elm2 = document.getElementById("demo2");
elm2.innerHTML = "<p><i>Tuhoc.cc</i></p>";
elm2.textContent = "<p><i>Tuhoc.cc  </i></p>";

/*
Tổng hợp kiến thức
textContent : Trả về nội dung nằm bên trong phần tử
bao gồm cả tab, xuống dòng,...
innerHTML : Trả về nội dung nằm bên trong phần tử và những thẻ <p>, <a>,....
nói chung là tất cả các thẻ HTML và cấu trúc
innerText : Trả về văn bản mà người dùng thấy trên trình duyệt, nếu có phần
tử bị loại bỏ bằng Css thì cũng không hiện ra
*/

