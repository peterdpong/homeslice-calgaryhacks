import React, { useState } from 'react';
import { RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Legend, Tooltip, Radar } from 'recharts'

const RadarChart = ({ dataSet }) => {
    return (
        <RadarChart outerRadius={100} width={800} height={300} data={dataSet}>
            <PolarGrid />
            <PolarAngleAxis dataKey="Home Prices" />
            <PolarRadiusAxis angle={72} domain={[0, 150]} />
            <Radar name="Neighbourhood" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
        </RadarChart>

    )
}

export default RadarChart