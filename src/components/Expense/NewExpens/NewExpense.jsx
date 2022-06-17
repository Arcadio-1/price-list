import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHanler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random(),
    };
    props.onExpenseSave(expenseData);
    setIsEditing(false);
  };
  const stopExpenseEdtingHandler = () => {
    setIsEditing(false);
  };
  const startExpenseEditinHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense card">
      {!isEditing && (
        <button className="new-expense-add" onClick={startExpenseEditinHandler}>
          Add Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHanler}
          onCancel={stopExpenseEdtingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
