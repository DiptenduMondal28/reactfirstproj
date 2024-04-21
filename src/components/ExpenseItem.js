import './ExpenseItem.css'


function ExpenseItem(props) {
  const expenseDate = props.date.toISOString();
  const expenseAmount=props.price;
  const location=props.location;
  const title=props.title;
  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className="expense-item__location">{location}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
