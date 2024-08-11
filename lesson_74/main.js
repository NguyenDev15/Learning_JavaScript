function demTgian(){
    const now = new Date();
const hours = String(now.getHours()).padStart(2, "0"); /* padStart để chèn số 0 đằng trước
khi mà không đủ 2 kí tự */
const minutes = String(now.getMinutes()).padStart(2, "0");
const seconds = String(now.getSeconds()).padStart(2, "0");
const timeString = `${hours} : ${minutes} : ${seconds}`;
console.log(timeString);
let clock = document.getElementById("clock").innerHTML = timeString ;
}

setInterval(demTgian, 1000);