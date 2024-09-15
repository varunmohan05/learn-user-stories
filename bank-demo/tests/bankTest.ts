import Bank from '../src/bank'

// Account Creation

// Account Creation scenario 1
const bank = new Bank();
const acc = bank.createAccount('Jane Doe', 25, '123456');

if(acc.accountNumber === '123456'){
    console.log('account creation scenario 1 passed')
} else {
    console.log('account creation scenario 1 failed')
}

// Account Creation scenario 2
try {
    bank.createAccount('Jane Doe', 25, '123456');
    console.log('saccount creation scenario 2 failed')
} catch {
    console.log('account creation scenario 2 passed')
} 


// Money Deposit

// Money Deposit scenario 1
const newBalance: number = bank.depositMoney(acc.accountNumber, 100)
if(newBalance === 100){
    console.log('deposit scenario 1 passed')
} else {
    console.log('deposit scenario 1 failed')
}

// Money Deposit scenario 2
try {
    bank.depositMoney(acc.accountNumber, -1)
    console.log('deposit scenario 2 failed')
} catch {
    console.log('deposit scenario 2 passed')
}

// Money Deposit scenario 3
try {
    bank.depositMoney('non-existing-account-no', 200)
    console.log('deposit scenario 3 failed')
} catch {
    console.log('deposit scenario 3 passed')
}

// Money Deposit scenario 4
try {
    bank.depositMoney('non-existing-account-no', -1)
    console.log('deposit scenario 4 failed')
} catch {
    console.log('deposit scenario 4 passed')
}