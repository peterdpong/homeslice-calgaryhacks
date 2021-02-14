import React, { useState } from 'react';
import { RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Legend, Tooltip, Radar } from 'recharts'

const RadarGraph = ({ dataSet }) => {
    return (
        <RadarChart outerRadius={100} width={800} height={300} data={dataSet}>
            <PolarGrid />
            <PolarAngleAxis dataKey={["Home Prices", "Rent Bank Applicants", "Social Housing Turnover", "Social Housing Units", "Social Housing Waiting List"]} />
            <PolarRadiusAxis angle={72} domain={[0, 150]} />
            <Radar name={dataSet["Neighbourhood"]} dataKey="Home Prices" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
        </RadarChart>

    )
}

export default RadarChart