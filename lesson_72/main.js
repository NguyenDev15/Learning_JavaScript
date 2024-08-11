//  Dom - innerHTML - getElementById, getElementByTagName, getElementByClassName

// getElementByTagName
console.log("getElementByTagName");
let li_item =  document.getElementsByTagName("li")
console.log(li_item); // trả về mảng các phần tử li
// truy xuất và thay đổi phần tử theo vị trí index
li_item[1].innerHTML = 'Đã thay đổi phần tử tại vị trí index 1';

//  getElementByClassName
console.log('getElementByClassName');
let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);

// getElementById
let el = document.getElementById("list_about");
console.log(el);
el.innerHTML = "Somthing about";

