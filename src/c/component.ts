export class SimpleBank {
    private _balance = 0;

    public get balance(): number {
        return this._balance;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Deposit amount must be more than zero');
        }

        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error('Withdraw amount must be more than zero');
        }

        this._balance -= amount;
    }
}
