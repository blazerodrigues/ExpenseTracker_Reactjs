import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) => {

    //here we use CONDITIONAL return statement

    if(props.items.length === 0){
        //this is the CONDITIONAL return statement
        return (
            <h2 className="expenses-list__fallback">NO EXPENSES FOUND</h2>
        )
    }


    //this is the MAIN return statement
    return (
        <ul className="expenses-list">
            {
                props.items.map(
                    //(expense) is the individual expense "item" from the "items" array
                    (expense) => {
                        return (

                            <ExpenseItem
                                //we add key prop when dynamically creating components using  JS map function so that REACT can optimize the rendering of the new ITEM.
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        )
                    }
                )
            }
        </ul>
    )

}

export default ExpensesList;