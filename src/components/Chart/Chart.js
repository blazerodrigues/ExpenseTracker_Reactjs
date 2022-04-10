import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {


    //This will iterate over dataPoint objects and return dataPointValues number only
    const dataPointValues = props.dataPoints.map((dataPoint)=> {
        return (dataPoint.value);
    })

    const totalMaximum = Math.max(...dataPointValues); //This will deconstruct the array and return the MAX value of the input


    return (
        <div className="chart">

            {props.dataPoints.map(
                (dataPoint) => {
                    return (
                        <ChartBar
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={totalMaximum}
                            label={dataPoint.label}
                        />
                    )
                }
            )}

        </div>
    )

}


export default Chart;