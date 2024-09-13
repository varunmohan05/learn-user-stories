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
}
