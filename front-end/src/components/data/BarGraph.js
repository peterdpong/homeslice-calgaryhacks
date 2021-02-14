import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

const BarGraph = ({dataset, id}) => {
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
        <Bar dataKey={id+1} fill="#3182CE"/>
    </BarChart>
  )
}

export default BarGraph