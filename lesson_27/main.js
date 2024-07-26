// String JS part 2 => cắt chuỗi
// string.slice(beginIndex, endIndex); -> endIndex k nhập thì sẽ chạy đến cuối chuỗi
// string.substring(beginIndex, endIndex); => cũng khá tương tự so với .slice

// ví dụ slice
let chuoiSlice = "123456789";
let catChuoi = chuoiSlice.slice(0,4); // ở endIndex thì sẽ trừ đi 1 giá trị 4-1=3
console.log(catChuoi);

// ví dụ substring
let chuoiSlice2 = "123456789";
let catChuoi2 = chuoiSlice2.substring(0,4); // ở endIndex thì sẽ trừ đi 1 giá trị 4-1=3
console.log(catChuoi2);

// ví dụ 2 về slice và substring
let tinNhan = prompt("nhập");
let catTinNhan = tinNhan.slice(0,20); // không quá 20 kí tự
if(tinNhan.length > 20){
    console.log(`Bạn đã nhập quá ${tinNhan.length - 20} kí tự`);
    console.log(`Chuỗi sau xử lí: ${catTinNhan}`);
}
else if(tinNhan.length <= 20){
    console.log(`Bạn đã nhập ${catTinNhan.length} kí tự`);
    console.log(`Chuỗi sau xử lí: ${catTinNhan}`);
}

// Sự khác nhau của slice và substring
// string.slice(begin, end) // end < begin thì lỗi
// string.substing(begin, end) // nếu end < begin thì js tự đảo chiều end thành begin



// Sử dụng substring với số âm
let soAm = "123abcd123haha"
console.log(soAm.substring(-5, -2)); // js sẽ chuyển lại thành (0,0) nên sẽ không xuất chuỗi
//Trường hợp chỉ 1 số là âm
console.log(soAm.substring(9, -2)); // js sẽ tự đối -2 thành 0 và đảo lên thành (0, 9);

// Sử dụng slice với số âm
console.log(soAm.slice(-5, -1)); // đếm ngược từ phải qua và end -1 - 1 = -2 lấy được 4 kí tự