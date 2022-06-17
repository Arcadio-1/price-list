import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "All") {
      return expense;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="main card">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenseData={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};
export default Expenses;
