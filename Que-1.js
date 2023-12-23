class BankAccount{
    constructor(accountHolder,initialBalance){
        this.accountHolder=accountHolder;
        this.balance = initialBalance;
    }
    deposit(amount){
        if(amount >0 ){
            this.balance = amount+this.balance
            console.log(`Hi! ${this.accountHolder} your amount is Deposited Rs. ${amount}. New balance: Rs.${this.balance}`);
        }else{
            console.log(`Invalid deposit amount. Please positive amount.`);
        }
    }
    withdraw(amount){
        if(amount>0){
            this.balance= amount-this.balance;
            console.log(`Withdrawn Rs.${amount}. New balance: Rs.${this.balance}`);
        }else{
            console.log(`Invalid withdraw amount. Please positive amount.`);
        }
    }
    checkBlance(){
        console.log(`Account balance for ${this.accountHolder} Rs. ${this.balance}`);
    }
}

const myAccount = new BankAccount('Mahesh',800)
myAccount.deposit(5000)
myAccount.withdraw(5200)
myAccount.checkBlance()