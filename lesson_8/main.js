// Swicht case 

let number = 12 ;
switch(number % 2){
    case 0:
        console.log("Số chẵn");
        break;
    case 1:
        console.log("Số lẻ");
        break; 
    default:
        console.log("Không phải số");   
}

let month = 2;
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Tháng %s có 31 ngày`,month);
        break;
    
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Tháng %s có 30 ngày`,month);
        break;

    case 2:
        console.log(`Tháng %s có 28 hoặc 29 ngày`,month)
        break;

    default:
        console.log("Không phải tháng trong năm");
}


// Bài tập

    let find = parseInt(prompt(`
    Chọn cách tìm kiếm:
    1. Tìm theo tên
    2. Tìm theo tác giả
    3. Tìm theo nhà xuất bản 
    4. Tìm theo tiêu đề
    `));

    switch(find){
        case 1:
            alert("Bạn chọn tìm theo tên");
            break;
        case 2:
            alert("Bạn chọn tìm theo tác giả");
            break;
        case 3:
            alert("Bạn chọn tìm theo nhà xuất bản");
            break;
        case 4:
            alert("Bạn chọn theo tiêu đề");
            break;
        default:    
            alert("Không có trong mục lựa chọn");
    }