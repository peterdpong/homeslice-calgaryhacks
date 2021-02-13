import React, {useState} from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

const BarGraph = ({dataset, xdatakey, ydatakey}) => {
  return(
    <BarChart
        width={600}
        height={300}
        data={dataset}
        margin={{ top: 5, right: 30, left: 20, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xdatakey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={ydatakey} fill="#DDA0DD" />
    </BarChart>
  )
}

export default BarGraph