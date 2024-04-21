import './ExpenseItem.css'


function ExpenseItem() {
  const expenseDate = new Date(2023,7,15).toISOString();
  const expenseAmount=10;
  const location='Bangalore';
  const expenceItem='Book'
  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className="expense-item__location">{location}</div>
      <div className='expense-item__description'>
        <h2>{expenceItem}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
