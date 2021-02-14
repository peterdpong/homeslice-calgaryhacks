import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar} from 'recharts'
import {torontoSocialHousingData, overallSocialHousingData} from '../../Datasets/SocialHousingData2011';

const BarGraph = ({dataset, xKey, barKey, width}) => {
  return(
    <BarChart
        width={width}
        height={500}
        data={dataset}
        margin={{ top: 5, right: 30, left: 20, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey}/>
        <YAxis domain={[0, 1000]}/>
        <Tooltip />
        <Bar dataKey={barKey} fill="#3182CE"/>
    </BarChart>
  )
}

export default BarGraph