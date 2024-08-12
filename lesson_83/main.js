// Dom - appendChild

// Xác định phần tử cha
let parentElm = document.querySelector("#header");

// Tạo phần tử con mới, ví dụ với thẻ p
let elm1 = document.createElement("p");
// Thêm nội dung vào thẻ p 
elm1.textContent = "Một con duỵt xòe ra hai cái cánh";
// Thêm style
elm1.style.color = "red";
// Thêm class cho thẻ elm1
elm1.setAttribute("class", "doan_van");

/*
Đối tượng có thể thêm
    - appendChild chỉ thêm được đối tượng Node
    - append thêm được cả Node và chuỗi văn bản
*/
parentElm.appendChild(elm1)
// sau khi có class mới được thêm thì có thể Css như bth

// appendChild không thêm được văn bản
// append thì được
// parentElm.append("Hôm nay trời thật đẹp");
// appendChild thì trả về giá trị
// append thì trả về undefined


// Do appendChild có giá trị trả về nên 
// ta có thể Thêm và ngay lập tức thao tác với phần tử 
let btn = document.createElement("button");
btn.textContent = "Click me";
// Thêm phần tử mới vào một phần tử cha và nhận giá trị trả về
let addBtn = parentElm.appendChild(btn);

// Gán sự kiện click cho phần tử vừa được thêm
addBtn.addEventListener("click", function (){
    alert("Bạn vừa click vào nút");
});