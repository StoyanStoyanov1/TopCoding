class BankAccount {
    public readonly owner: string;
    private balance: number;

    constructor(owner: string, balance: number) {
        if (balance < 0) throw new Error("Balance cannot be negative");

        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Amount must be positive");

        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount < 0) throw new Error("Amount cannot be negative");
        if (amount > this.balance) throw new Error("Insufficient funds");

        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }

    toString(): string {
        return `BankAccount[${this.owner}] — Balance: ${this.balance.toFixed(2)}€`;
    }
}