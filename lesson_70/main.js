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
    #balance; // Private fields
    #pin; // Private fields
    #isPinEnter = false; // Private fields
    constructor(bankName, pin){
        this.bankName = bankName;
        this.#pin = pin;
        this.#balance = 0; // Tk ngan hang = 0 luc tao the
    }
    // Phương thức gửi tiền vào tài khoản
    deposit(value){
        if(!this.#isPinEnter){
            console.log("Kiểm tra lại mã pin");
            return;
        }
        this.#balance += value;
    }
    

    // *******************************
    // Private Methods
    #validatePin(pin){
        return this.#pin === pin;   
    }   

    // Public Methods   
    enterPin(pin){
        if(this.#validatePin(pin)){
            this.#isPinEnter = true;
        }
        else{
            console.log("Mã pin sai");
        }
    }

    // *******************************


    // Phương thức rút tiền tài khoản
    withdraw(value){
        if(!this.#isPinEnter){
            console.log("Kiểm tra lại mã pin");
            return;
        }

        if(value > this.#balance){
            console.log("Số dư không đủ");
        }
        else{
            this.#balance -= value;
            console.log("Rút tiền thành công");
            
        }
    }
    // Getter
    get balance(){
        if(!this.#isPinEnter){
            console.log("Kiểm tra lại mã pin");
            return;
        }
        return this.#balance;   
    }
 }
 // Tạo đối tượng
const wallet = new Wallet("MB Bank", "1234");

// Nhập mã pin
wallet.enterPin("1234");

// Gửi tiền
wallet.deposit(1000);
// Rút tiền 
wallet.withdraw(250);  
// Xem tài khoản, pin
// console.log(wallet.#balance);
// console.log(wallet.#pin);

console.log(wallet.balance);




