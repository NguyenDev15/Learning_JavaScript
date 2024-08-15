// stopImmediatePropagation()

const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener("click", (e) => {
//     console.log("Children click");
// },
//     {capture: true}
// );

// parent.addEventListener("click", (e) => {
//     console.log("Parent click");
// },
//     {capture: true}
// );

// grandparent.addEventListener("click", (e) => {
//     console.log("Grandparent click");
// },
//     {capture: true}
// );


//  {capture: false} thì từ trong ra ngoài từ con tới cha
//  {capture: true} thì từ ngoài vào trong từ cha tới con



// so sánh giữa stopPropagation và stopImmediatePropagation()
// dùng stopPropagation chỉ ngăn sự kiện lan truyền từ con lên cha
// không ngăn sự kiện của cùng element

// 1. stopPropagation
// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Children click");
// },
//     {capture: true}
// );
// parent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Parent click");
// },
//     {capture: true}
// );
// grandparent.addEventListener("click", (e) => {
  
//     console.log("Grandparent click");
// },
//     {capture: true}
// );

// 2.stopImmediatePropagation(): ngăn chặn được sự kiện của cùng một element
child.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    console.log("Children click");
},
);
parent.addEventListener("click", (e) => {
    e.stopImmediatePropagation();   
    console.log("Parent click");
},
);
grandparent.addEventListener("click", (e) => {
  
    console.log("Grandparent click");
},
);
