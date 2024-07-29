// Date time trong JS phần 1

// Tạo ra đối tượng date : Sử dụng new Date()
let currentDate = new Date();
console.log(currentDate);

// Cách lấy info thời gian
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // +1 để đúng tháng hiện tại 
let date = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log(`Năm hiện tại ${year}`);
console.log(`Tháng hiện tại ${month}`);
console.log(`Ngày hiện tại ${date}`);
console.log(`Giờ hiện tại ${hours}`);
console.log(`Phút hiện tại ${minutes}`);
console.log(`Giây hiện tại ${seconds}`);


// timestamp là 1 đại diện cụ thể trong thời gian, tính mốc tgian = 0
// 00:00:00 ngày 1 tháng 1 năm 1970

let timestamp1 = new Date(0);
console.log(timestamp1);    

// lấy timestamp thời điểm hiện tại
let currentTimeStamp = currentDate.getTime();
console.log(currentTimeStamp);