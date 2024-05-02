import React,{useState} from "react";
import './ExpenseForm.css'; 

const ExpenseForm = () => {

    const [userInput,setEnteredData]=useState({
        enteredTitle:'',
        enteredLocation:'',
        enteredDate:'',
        enteredExpense:''
    })

    const titleChangeHandler=(event)=>{
        setEnteredData((prevState)=>{return{...prevState,
        enteredTitle:event.terget.value
        }})
    }
   
    const locationChangehandler=(event)=>{
        setEnteredData((prevState)=>{return{...prevState,
            enteredTitle:event.terget.value
            }})
    }
    
    const expenseChangeHandler=(event)=>{
        setEnteredData((prevState)=>{return{...prevState,
            enteredTitle:event.terget.value
            }})
    }

    const dateChangeHandler=(event)=>{
        setEnteredData((prevState)=>{return{...prevState,
            enteredTitle:event.terget.value
            }})
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" onChange={locationChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" onChange={expenseChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button> 
            </div>
        </form>
    );
};

export default ExpenseForm;
