import React, {useState} from 'react';
import {torontoSocialHousingData} from '../../Datasets/SocialHousingData2011.js';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

export default class BarGraph extends React.Component {
    render() {
        return (
            <BarChart
                width={600}
                height={300}
                data={torontoSocialHousingData}
                margin={{ top: 100, right: 30, left: 20, bottom: 5}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Neighbourhood" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Social Housing Waiting List" fill="#DDA0DD" />
            </BarChart>
        );
    }
}