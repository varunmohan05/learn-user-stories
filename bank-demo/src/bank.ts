/**
 * Represents a bank account with essential details.
 */
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * Bank class that manages a collection of bank accounts.
 */
export default class Bank {
    // Holds the details of all the available accounts
    private accounts: BankAccount[] = [];

    /**
     * Checks if an account with the given account number exists.
     *
     * @param {string} accountNumber - The account number to search for.
     * @returns {BankAccount | undefined} The bank account if found, or undefined if not found.
     */
    private isAccountExists(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    /**
     * Creates a new bank account if an account with the given account number doesn't already exist.
     *
     * @param {string} name - The name of the account holder.
     * @param {number} age - The age of the account holder.
     * @param {string} accountNumber - The unique account number for the bank account.
     * @returns {BankAccount} The newly created bank account object.
     * @throws Will throw an error if an account with the given account number already exists.
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const bankAccount: BankAccount = { name: name, age: age, accountNumber: accountNumber, balance: 0 };

        if (this.isAccountExists(accountNumber)) {
            throw new Error('Account with this account number already exists');
        } else {
            this.accounts.push(bankAccount);
        }

        return bankAccount;
    }

    /**
     * Deposits a specified amount of money into the account associated with the given account number.
     *
     * @param {string} accountNumber - The account number to deposit money into.
     * @param {number} amount - The amount of money to deposit. Must be greater than 0.
     * @returns {number} The updated balance of the account after the deposit.
     * @throws Will throw an error if the amount is less than or equal to 0, or if the account number is invalid.
     * The error messages will specify whether the issue is the account number, the amount, or both.
     */
    public depositMoney(accountNumber: string, amount: number): number {
        const bankAccount: BankAccount | undefined = this.isAccountExists(accountNumber);

        if (amount > 0 && bankAccount) {
            bankAccount.balance += amount
        } else if (amount <= 0 && bankAccount) {
            throw new Error(`Invalid Amount! Invalid amount (${amount}) was provided. Amount should be greater than 0.`);
        } else if (amount > 0 && !bankAccount) {
            throw new Error(`Invalid Account Number! No account was found for the provided account number ${accountNumber}`);
        } else {
            throw new Error(`Invalid Amount and Account Number! Invalid amount (${amount}) was provided. Amount should be greater than 0. 
                No account was found for the provided account number ${accountNumber}`);
        }

        return bankAccount.balance
    } 

    /**
     * Checks the balance of the bank account associated with the given account number.
     *
     * @param {string} accountNumber - The account number for which the balance is to be checked.
     * @returns {number} The balance of the account.
     * @throws Will throw an error if no account is found for the provided account number.
     */
    public balanceCheck(accountNumber: string): number {
        const bankAccount: BankAccount | undefined = this.isAccountExists(accountNumber);
        if (!bankAccount) {
            throw new Error(`Invalid Account Number! No account was found for the provided account number ${accountNumber}`);
        }
        return bankAccount.balance
    }

    /**
     * Withdraws a specified amount of money from the account associated with the given account number.
     *
     * @param {string} accountNumber - The account number to withdraw money from.
     * @param {number} amount - The amount of money to withdraw. Must be greater than 0 and not exceed the current balance.
     * @returns {number} The updated balance of the account after the withdrawal.
     * @throws Will throw an error if:
     *  - The amount is less than or equal to 0.
     *  - The withdrawal amount exceeds the current account balance.
     *  - The account number is invalid.
     * The error messages will provide specific information about the issue, such as the invalid account, amount, or insufficient funds.
     */
    public withdrawMoney(accountNumber: string, amount: number): number {
        const bankAccount: BankAccount | undefined = this.isAccountExists(accountNumber);

        if (amount > 0 && bankAccount && (bankAccount.balance-amount)>=0) {
            bankAccount.balance -= amount
        } else if (amount <= 0 && bankAccount) {
            throw new Error(`Invalid Amount! Invalid amount (${amount}) was provided. Amount should be greater than 0.`);
        } else if (amount > 0 && bankAccount && (bankAccount.balance-amount)<0) {
            throw new Error(`Insufficient Balance! Withdarawal Amount (${amount}) exceeds the current balance (${bankAccount.balance}).`);    
        } else if (amount > 0 && !bankAccount) {
            throw new Error(`Invalid Account Number! No account was found for the provided account number ${accountNumber}`);
        } else {
            throw new Error(`Invalid Amount and Account Number! Invalid amount (${amount}) was provided. Amount should be greater than 0. 
                No account was found for the provided account number ${accountNumber}`);
        }

        return bankAccount.balance
    } 

}
