import React from 'react';
import jsonData from '../../Datasets/SocialHousingData2011.json';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

const dataset = JSON.parse(jsonData);

export default class BarGraph extends React.Component {
    state = {
        list: [...dataset]
    };

    render() {
        const { list } = this.state;

        return (
            <BarChart
                width={600}
                height={300}
                data={list}
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