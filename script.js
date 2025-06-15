const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');
const transactionListEl = document.getElementById('transaction-list');
const form = document.getElementById('transaction-form');


let transactions = JSON.parse(localStorage.getItem('transactions')) || [];


form.addEventListener('submit', function (e) {
    e.preventDefault();


    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.querySelector('input[name="type"]:checked').value;
    const category = document.getElementById('category').value;


    const newTransaction = {
        id: generateId(),
        description,
        amount,
        type,
        category
    };


    transactions.push(newTransaction);


    localStorage.setItem('transactions', JSON.stringify(transactions));

   
    updateUI();
    form.reset();
});


function generateId() {
    return Math.floor(Math.random() * 1000000);
}


function updateUI() {

    transactionListEl.innerHTML = '';


    let totalBalance = 0;
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(transaction => {

        if (transaction.type === 'income') {
            totalBalance += transaction.amount;
            totalIncome += transaction.amount;
        } else {
            totalBalance -= transaction.amount;
            totalExpense += transaction.amount;
        }


        const li = document.createElement('li');
        li.innerHTML = `${transaction.description} - $${transaction.amount} (${transaction.category}) 
                        <button onclick="deleteTransaction(${transaction.id})">x</button>`;
        transactionListEl.appendChild(li);
    });


    balanceEl.innerText = `$${totalBalance.toFixed(2)}`;
    incomeEl.innerText = `$${totalIncome.toFixed(2)}`;
    expenseEl.innerText = `$${totalExpense.toFixed(2)}`;
}


updateUI();


function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
 localStorage.setItem('transactions', JSON.stringify(transactions));
 updateUI();
}
