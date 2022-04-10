import React, {useState} from 'react'; // import React from 'react'; is optional. Modern react projects do not require this import. return React.createElement() is the method that converts JSX to Elements (behind the scenes).
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

//this will be used to initialize the 'expenses' array state
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  //useState always returns a 2-element array. Here we are setting the values of expenses, setExpenses using array destructuring
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //example of how data can be passed from child component to parent component using function props
  const addExpenseHandler = (expense) => {
    // ...array is called the 'spread' operator
    //also, since the new state depends on the previous state, here we use the "function form" of updating the state
    setExpenses(
      (prevExpenses)=>{
        return ([expense, ...prevExpenses]);
      }
    )
    
  }

  return (
    <div>
      
      {/*//example of how data can be passed from child component to parent component using function props*/}
      <NewExpense onAddExpense={addExpenseHandler}/>

      {/*"expenses" array is being passed to Expenses custom react component*/}
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
