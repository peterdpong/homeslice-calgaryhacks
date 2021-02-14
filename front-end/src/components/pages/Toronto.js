import React from 'react';
import BarGraph from '../data/BarGraph';
import {torontoSocialHousingData} from '../../Datasets/SocialHousingData2011';
import { RadarChart } from 'recharts';

const TorontoPage = () => {
    return (
        <RadarChart dataset={torontoSocialHousingData}/>
    )
}

export default TorontoPage