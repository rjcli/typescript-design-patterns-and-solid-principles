class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter method for account balance
  public get balance(): number {
    return this._balance;
  }

  // Method for Deposit money
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log('Invalid deposit amount...');
      return;
    }

    this._balance += amount;
  }

  // Method for withdrawing money
  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log('Invalid withdrawal amount...');
      return;
    }

    if (this._balance < amount) {
      console.log('Insufficient funds...');
      return;
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(50);
myAccount.withdraw(100);
console.log('Current balance:', myAccount.balance);
