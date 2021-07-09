import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found!</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expense!</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* map function loops into each element of expense array */}
      {props.items.map( (expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
