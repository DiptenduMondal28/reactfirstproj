import React from 'react';
import Expenses from './components/Expenses/Expenses'


const App=()=> {
  const expenses = [
    {
      id:1,
      date: new Date(2023, 7, 15),
      price: "10",
      location: "Bangalore",
      title: "Insurence",
    },
    {
      id:2,
      date: new Date(2023, 3, 25),
      location: "Delhi",
      title: "Book",
      price: "20",
    },
    {
      id:3,
      date: new Date(2023, 10, 11),
      location: "Hyderabad",
      title: "Pen",
      price: "5",
    },
    {
      id:4,
      date: new Date(2023, 1, 14),
      location: "Mumbai",
      title: "Laptop",
      price: "200",
    },
  ];
  return (
    <div>
      <h1>let's get started</h1>
        <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
