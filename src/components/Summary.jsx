function Summary(props) {
  const expenses = props.expenses;

  const totalTransactions = expenses.length;

  let totalAmount = 0;
  let highestAmount = 0;

  for (let i = 0; i < expenses.length; i++) {
    const currentAmount = expenses[i].amount;
    totalAmount = totalAmount + currentAmount;
    if (currentAmount > highestAmount) {
      highestAmount = currentAmount;
    }
  }
  return (
    <section className="summary">
      <div className="summary-card">
        <h3>Total Expenses</h3>
        <p>${totalAmount.toFixed(2)}</p>
      </div>
      <div className="summary-card">
        <h3>Total Transactions</h3>
        <p>{totalTransactions}</p>
      </div>
      <div className="summary-card">
        <h3>Highest Expense</h3>
        <p>${highestAmount}</p>
      </div>
    </section>
  );
}

export default Summary;
