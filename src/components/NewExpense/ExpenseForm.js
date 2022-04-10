import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /* 
    //We can set multiple states, or combine them into one state by passing an object.
     const [userInput, setUserInput] = useState({
         enteredTitle: '',
         enteredAmount: '',
         enteredDate: ''
     })
     */

    //onChange event handler gives us an 'event'. using this 'event', we can figure out the change that occured in the DOM.
    //we use event.target.value , it indicates the VALUE when the event occured.
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        /*//Here, while updating state, the state update depends on the previous state. This is the wrong way of doing it. In some cases, due to delay in updating the state in react, we may refer an incorrect snapshot of the previous state.
        setUserInput({
            ...userInput,
            enteredTitle:event.target.value
        })*/

        /*//When updating a state whose value depends on a previous state, use the below special syntax.
        setUserInput(
            (previousState) => {
                return { previousState, enteredTitle: event.target.value }
            }
        )*/

    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, // + sign is for forcing a number conversion. This is to avoid a BUG - when adding multiple values, those values are added as strings instead of numbers. (in the absense of + sign)
            date: new Date(enteredDate)
        }

        // console.log(expenseData);

        //example of how data can be passed from child component to parent component using function props
        props.onSaveExpenseData(expenseData);

        //After submitting, we are setting the input fields to blank value
        //This is an example of two-way binding in REACT. ie, we can update react state variables using the input field values, and reciprocally we can also update the input field values using the react state variable. Example below, clearing the input fields after form submit by updating the state of variables to blank string.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2001-01-01" step="2099-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>

            </div>


            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>


        </form>
    );

}

export default ExpenseForm;