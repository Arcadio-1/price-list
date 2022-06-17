import ExtensesItems from "./ExpensesItems";
export const ExpensesList = (expenses) => {
  return (
    <div>
      {expenses.items.map((item) => {
        return (
          <ExtensesItems
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
};
export default ExpensesList;
