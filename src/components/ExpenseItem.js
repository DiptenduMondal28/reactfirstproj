import './ExpenseItem.css'

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function ExpenseItem(props) {
  const expenseDate = props.date.getDate();
  const expenseMonth=months[props.date.getMonth()];
  const expenseYear=props.date.getFullYear();
  
  return (
    <div className='expense-item'>
      <div>
        <div>{expenseMonth}</div>
        <div>{expenseYear}</div>
        <div>{expenseDate}</div>
      </div>
      <div className="expense-item__location">{props.location}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
