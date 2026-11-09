import { useState } from 'react';

function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    //All fields are required
    if (title.trim() === '' || amount === '' || date === '') {
      setErrorMessage('All fields are required');
      return;
    }

    //amount must be greater than zero
    if (Number(amount) <= 0) {
      setErrorMessage('Amount must be greater than zero');
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      category: category,
      date: date,
    };

    props.onAddExpense(newExpense);

    setTitle('');
    setAmount('');
    setCategory('Food');
    setDate('');
    setErrorMessage('');
  }

  return (
    <section className="form-section">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Expense Title</label>
          <input
            type="text"
            id="title"
            placeholder="e.g. Lunch"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="number"
            id="amount"
            placeholder="e.g. 250"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>

        {/* Show error only if it is there */}
        {errorMessage !== '' && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="add-button">
          Add Expense
        </button>
      </form>
    </section>
  );
}

export default ExpenseForm;
