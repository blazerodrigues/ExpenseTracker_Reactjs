import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    //example of how data can be passed from child component to parent component using function props
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        //example of how data can be passed from child component to parent component using function props
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }


    return(
        <div className='new-expense'>

            {/*In javascript, whenever && operator is used, if first statement is true, the second statement is executed. We are expoiting this feature to conditionally output code*/}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}

            {/*example of how data can be passed from child component to parent component using function props*/}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}

        </div>
    );

}

export default NewExpense;