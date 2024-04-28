import React from 'react';
import './ExpenseDate.css'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const ExpenseDate=(props)=>{
  const expenseDate = props.date.getDate();
  const expenseMonth = months[props.date.getMonth()];
  const expenseYear = props.date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{expenseMonth}</div>
      <div className='expense-date__year'>{expenseYear}</div>
      <div className='expense-date__date'>{expenseDate}</div>
    </div>
  );
}

export default ExpenseDate;
