import React from 'react';
import BarGraph from '../data/BarGraph';
import {torontoSocialHousingData} from '../../Datasets/SocialHousingData2011';
import RadarChart from '../data/BarGraph';

const TorontoPage = () => {
    return (
        <RadarChart dataset={torontoSocialHousingData[0]}/>
    )
}

export default TorontoPage