import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    return (
        <div>
        {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          price={expense.price}
          location={expense.location}
          title={expense.title}
        ></ExpenseItem>
      ))}
        </div>
    )
}

export default Expenses;