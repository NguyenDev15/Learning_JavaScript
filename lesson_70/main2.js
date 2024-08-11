// Object: Lập trình hướng đối tượng
/*
 Public fields : Trường công khai
 Private fields : Trường riêng tư
 Public Methods : Phương thức công khai
 Private Methods : Phương thức riêng tư
 */

 // Thêm dấu gạch dưới: Private fields : Trường riêng tư theo quy ước,
 // cố tình truy cập vào thì vẫn được   
 class Wallet {
    constructor(bankName, pin){
        this.bankName = bankName;
        this._pin = pin;
        this._balance = 0; // Tk ngan hang = 0 luc tao the
    }
    // Phương thức gửi tiền vào tài khoản
    deposit(value){
        this._balance += value;
    }
    // Phương thức rút tiền tài khoản
    withdraw(value){
        if(value > this._balance){
            console.log("Số dư không đủ");
        }
        else{
            this._balance -= value;
            console.log("Rút tiền thành công");
            
        }
    }
 }
 // Tạo đối tượng
const wallet = new Wallet("MB Bank", "0012");
// Gửi tiền
wallet.deposit(1000);
// Rút tiền 
wallet.withdraw(200);  
// Xem tài khoản, pin
console.log(wallet._balance);
console.log(wallet.pin);





