import React from 'react';
import BarGraph from '../data/BarGraph';
import RadarGraph from '../data/RadarGraph';
import {torontoSocialHousingData} from '../../Datasets/SocialHousingData2011';
import { Container } from '@chakra-ui/react';

const TorontoPage = () => {

  var neighbourhoodsWithFiftyPercentDiff = [];
  torontoSocialHousingData.forEach((current) => {
    if(current['Social Housing Units'] == 0 && current['Social Housing Waiting List'] > 0){
      neighbourhoodsWithFiftyPercentDiff.push(current);
    } else if(current['Social Housing Waiting List'] / current['Social Housing Units'] > 0.5) {
      neighbourhoodsWithFiftyPercentDiff.push(current);
    }
  })
  console.log(neighbourhoodsWithFiftyPercentDiff);

  return (
    <Container centerContent>
      <Heading fontSize="4xl">Toronto Housing Overview</Heading>
      <RadarGraph dataset={torontoSocialHousingData[0]}/>
      <BarGraph dataset={torontoSocialHousingData} xdatakey="Neighbourhood" ydatakey="Social Housing Waiting List"/>
    </Container>
  )
}

export default TorontoPage