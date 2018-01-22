import React from 'react';
import '../style/viewing_numbers_chart.css';
import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line} from 'recharts';

export default (props) => {
    return (
        <div className="chart col-xl-6">
            <div className="chart-title">
                <h3>{props.title}</h3>
            </div>
            <div>
                <ComposedChart width={600} height={300} data={props.data}
                          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="theater" fill="#FD8604" />
                    <Bar dataKey="new" fill="#FFB717" />
                    <Line type='monotone' dataKey='total' stroke='#FECF88'/>
                </ComposedChart>
            </div>
        </div>
    )
}