import React from 'react';
import BarGraph from '../data/BarGraph';
import {torontoSocialHousingData} from '../../Datasets/SocialHousingData2011';

const TorontoPage = () => {
    return (
        <BarGraph dataset={torontoSocialHousingData} xdatakey="Neighbourhood" ydatakey="Social Housing Waiting List"/>
    )
}

export default TorontoPage