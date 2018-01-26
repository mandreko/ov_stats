import React from 'react';
import '../style/viewing_numbers_chart.css';
import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line} from 'recharts';

export default (props) => {
    return (
        <div className="chart col">
            <div className="chart-title">
                <h3>{props.title}</h3>
            </div>
            <div>
                <ComposedChart width={440} height={200} data={props.data}
                          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="Reviewer.name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="theaterViews" fill="#FD8604" />
                    <Bar dataKey="newViews" fill="#FFB717" />
                    <Line type='monotone' dataKey='totalViews' stroke='#FECF88'/>
                </ComposedChart>
            </div>
        </div>
    )
}