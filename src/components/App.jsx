import Header from "./Heder";
import Expenses from "./Expense/Expenses";
// import Card from "./components/card";
import NewExpense from "./Expense/NewExpens/NewExpense";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [useExpense, setExpense] = useState(expenses);
  const expensesSaveHandler = (exp) => {
    setExpense((prevexpanse) => {
      return [exp, ...prevexpanse];
    });
  };
  return (
    <div className="container">
      <NewExpense onExpenseSave={expensesSaveHandler} />
      <Header />
      <Expenses items={useExpense} />
    </div>
  );
}

export default App;
