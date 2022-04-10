import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

    //chartDataPoints will be an ARRAY of dataPoint OBJECTS
    const chartDataPoints = [
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0}
    ];

    //for IN loop is used while iterating over ARRAYS
    //for OF loop is used while iterating over OBJECTS. As in this case.
    for(const expense of props.expenses){ //props.expenses will contain the filtered-expenses for a particular year //expense will be expense for a MONTH in the YEAR
        const expenseMonth = expense.date.getMonth(); // expense.date.getMonth() will return 0,1,2,3... 0 is January

        chartDataPoints[expenseMonth].value += expense.amount; //We are adding 0 + expenseAmount for a particular month. Eg: 0 + 35 Dollars = 35 Dollars 
    }

    return (
        <Chart dataPoints={chartDataPoints}/>
    )

}

export default ExpensesChart;