import React from 'react';
import BarGraph from '../data/BarGraph';
import RadarGraph from '../data/RadarGraph';
import {torontoSocialHousingData} from '../../Datasets/SocialHousingData2011';
import { Container, Flex, Heading, Box, Text, systemProps } from '@chakra-ui/react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import myMap from '../data/Map';

const TorontoPage = () => {

  var neighbourhoodsWithFiftyPercentDiff = [];
  var sumAveragePrice = 0;
  var dataParsed = [
    {
      "statistic": "homePrices"
    },
    {
      "statistic": "rentBankApplicant"
    },
    {
      "statistic": "housingUnits"
    },
    {
      "statistic": "socialHousingWaitingList"
    }
  ];

  torontoSocialHousingData.forEach((current) => {
    if(current['Social Housing Units'] == 0 && current['Social Housing Waiting List'] > 0){
      neighbourhoodsWithFiftyPercentDiff.push(current);
    } else if(current['Social Housing Waiting List'] / current['Social Housing Units'] > 0.5) {
      neighbourhoodsWithFiftyPercentDiff.push(current);
    }
    sumAveragePrice += current['Home Prices'];
    dataParsed[0][current["Neighbourhood Id"]] = current['Home Prices']
    dataParsed[1][current["Neighbourhood Id"]] = current['Rent Bank Applicants']
    dataParsed[2][current["Neighbourhood Id"]] = current['Social Housing Units']
    dataParsed[3][current["Neighbourhood Id"]] = current['Social Housing Waiting List']
  })

  return (
    <Container>
      <Container>
        <Heading margin="5" fontSize="4xl">Toronto Housing Overview</Heading>
        <Flex flexDirection="row">
          <Box flex="1" textAlign="center" marginInline="5">
            <Heading fontSize="3xl">{neighbourhoodsWithFiftyPercentDiff.length} / {torontoSocialHousingData.length}</Heading>
            <Text>Neighbourhoods > 50% Units to Waiting List</Text>
          </Box>
          <Box flex="1" textAlign="center" marginInline="5">
            <Heading fontSize="3xl">${(sumAveragePrice / torontoSocialHousingData.length).toFixed(2)}</Heading>
            <Text>Average property price</Text>
          </Box>
          <Box flex="1" textAlign="center" marginInline="5">
            <Text>Number of Neighbourhood > 50% Units to Waiting List</Text>
          </Box>
        </Flex>
      </Container>
      
      

      <myMap/>
      {/* <BarGraph dataset={torontoSocialHousingData} xdatakey="Neighbourhood" ydatakey="Social Housing Waiting List"/> */}
    </Container>
  )
}

export default TorontoPage