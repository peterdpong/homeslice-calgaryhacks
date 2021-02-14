import React, {useState} from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

const BarGraph = ({dataset, id}) => {
  console.log(dataset[0][id+1])
  console.log(dataset[0])
  return(
    <BarChart
        width={1000}
        height={500}
        data={dataset}
        margin={{ top: 5, right: 30, left: 20, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="statistic"/>
        <YAxis domain={[0, 1000]}/>
        <Tooltip />
        <Legend />
        <Bar dataKey={dataset[0][id+1]} fill="#DDA0DD" />
    </BarChart>
  )
}

export default BarGraph