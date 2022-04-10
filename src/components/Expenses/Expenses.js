import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';


//Example of using ARROW function 
const Expenses = (props) => {

    //let title = props.title; //this is the conventional JS way of declaring variables. Drawback: When variable changes, the state does not change. 

    //Declaring variables using USESTATE. It returns 2 values in an array. The variable value and a function to change the variable value.
    //const [variable,setVariable] = useState(variableInitialValue);
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    //filtering expense "items" array and storing filtered result in filteredExpenses array
    const filteredExpenses = props.items.filter(
        //expense represent individual filtered expense item
        (expense) => {
            //expense object's date is in DATE format. FilteredYear is in string format. So we are converting the former to String format for comparasion.
            return (expense.date.getFullYear().toString() === filteredYear); //filteredExpenses will contain those items for which this expression evaluates to TRUE.
        }
    );



    return (

        < li >
            {/* We are wrapping the entire thing in <li><li> as "ExpensesList" componenent renders an unordered list(<ul></ul>). This is to maintain HTML semantics. Visually there would be NO difference though, this is kinda optional. */}

            {/*Card component in this application, is an example of composition. You will see that components can be nested inside other components. ie, Props can have child-props.*/}
            <Card className="expenses">

                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesList items={filteredExpenses} />

            </Card>

        </li >

    )
}

export default Expenses;

