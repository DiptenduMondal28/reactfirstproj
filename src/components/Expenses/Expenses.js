import React from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses=(props)=> {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            price={expense.price}
            location={expense.location}
            title={expense.title}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
