const ExpensesDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="item-date card">
      <p className="item-date-month">{month}</p>
      <p className="item-date-day">{day}</p>
      <p className="item-date-year">{year}</p>
    </div>
  );
};
export default ExpensesDate;
