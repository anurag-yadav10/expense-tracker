function ExpenseItem(props) {
  const expense = props.expense;
  return (
    <li className="expense-item">
      <div>
        <h4>{expense.title}</h4>
        <p>
          {expense.category} • {expense.date}
        </p>
      </div>
      <div>
        <span className="expense-amount">${expense.amount}</span>
        <button
          onClick={() => {
            props.onDeleteExpense(expense.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;
