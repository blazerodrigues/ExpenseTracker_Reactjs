//useState is a react hook for updating the state of variables
import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

//example of using normal function (as opposed to using arrow functions)
function ExpenseItem(props) {

    return (
        <Card className="expense-item">

            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
            
        </Card>
    );
}

export default ExpenseItem;