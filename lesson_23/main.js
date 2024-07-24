// Hoisting trong js
// so sánh giữa var và let


// var 
console.log(`Giá trị là %s`,a);
// khởi tạo thử sau khi xuất thông báo
var a = 1;
/*Đối với var khởi sau tạo
 khi xuất thông báo thì chỉ 
 trả về thông báo. Còn giá trị là undifined*/

//  ĐÂY LÀ CÁCH JS HIỂU

// var
var b; // chỉ trả thông báo
console.log(`Giá trị là %s`,b);
// khởi tạo thử sau khi xuất thông báo
b = 1; // giá trị được định nghĩa sau nên không trong phạm vi

// SỰ KHÁC BIỆT LÀ NẾU TƯƠNG TỰ NHƯ VẬY MÀ DÙNG let THÌ SẼ LỖI 
// VÍ Dụ
/* console.log(`Giá trị là %s`,c);
    // let c = 1; -> lỗi không xuất được cả thông báo
*/    



// Var trong phạm vi function scope
function varInFunction(){
    // var d; -> đây là cách js hiểu 
    if(true){
        var d = 6; // vì var có phạm vi là function scope nên khởi tạo trong block scope thì js vẫn hiểu
        // và nếu dùng let thì sẽ lỗi
        console.log(`${d} trong block scope`);
    }
    console.log(`${d} trong function scope`);
}
varInFunction();

// TỔNG HỢP LẠI THÌ var -> có phạm vi là function scope
// let, const -> chỉ có phạm vi block scope, nếu ra khỏi phạm vi thì lỗi

// Bonus: nếu var khai báo trùng lặp lại thì js vẫn cho còn let thì sẽ báo lỗi
// var x = 1;
// ok
// var x = 1;
//-----
// let y = 1;
// error
// let y = 1;