import ExpensesDate from "./ExpensesDate";
import React, { useState } from "react";
// import Card from "./card";

const ExtensesItems = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("this is new tit");
  };
  return (
    <div className="item card">
      <ExpensesDate date={props.date} />
      <p className="item-title">{title}</p>
      <a
        onClick={(e) => {
          e.preventDefault();
          clickHandler();
        }}
        className="item-price"
        href="./"
      >
        $ {props.amount}
      </a>
    </div>
  );
};

export default ExtensesItems;
