import { useState } from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
  const expenses = props.expenses;
  const [selectedCategory, setSelectedCategory] = useState('All');

  let filteredExpenses = expenses;

  if (selectedCategory !== 'All') {
    filteredExpenses = expenses.filter((expense) => {
      return expense.category === selectedCategory;
    });
  }

  return (
    <section className="list-section">
      <div className="list-header">
        <h2>Expense history</h2>

        <select
          value={selectedCategory}
          onChange={(event) => {
            setSelectedCategory(event.target.value);
          }}
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <ul>
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDeleteExpense={props.onDeleteExpense}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ExpenseList;
