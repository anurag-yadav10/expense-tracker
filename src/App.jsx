import { useState, useEffect } from 'react';
import Summary from './components/Summary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');

    //if nothing was stored then getItem will return a null
    if (savedExpenses === null) {
      return [];
    }

    //if some data is there it will be in form of a string and we will have to convert it
    return JSON.parse(savedExpenses);
  });
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(newExpense) {
    setExpenses([newExpense, ...expenses]);
  }

  function deleteExpense(idToDelete) {
    const remainingExpenses = expenses.filter((expense) => {
      return expense.id != idToDelete;
    });

    setExpenses(remainingExpenses);
  }

  return (
    <div className="app">
      <h1>Expense tracker</h1>
      <Summary expenses={expenses} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
