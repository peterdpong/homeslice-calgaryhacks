import React, { useState } from 'react';
import {torontoSocialHousingData, overallSocialHousingData} from '../../Datasets/SocialHousingData2011';
import { Container, Flex, Heading, Box, Text, Select, Spacer } from '@chakra-ui/react';
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Legend, Tooltip } from 'recharts'
import myMap from '../data/Map';

const TorontoPage = () => {
  const [neighbourhood, setNeighbourhood] = useState("");

  const onChangeNeighbourhood = (event) => {
    setNeighbourhood(event.currentTarget.value);
  }

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
      <Container marginBottom="10" centerContent>
        <Heading margin="5" fontSize="4xl">Toronto Housing Overview</Heading>
        <Flex flexDirection="row">
          <Box flex="1" textAlign="center" marginInline="100">
            <Heading fontSize="3xl">{neighbourhoodsWithFiftyPercentDiff.length} / {torontoSocialHousingData.length}</Heading>
            <Text fontSize="2xl">Neighbourhoods > 50% Units to Waiting List</Text>
          </Box>
          <Box flex="1" textAlign="center" marginInline="100">
            <Heading fontSize="3xl">${(sumAveragePrice / torontoSocialHousingData.length).toFixed(2)}</Heading>
            <Text fontSize="2xl">Average property price</Text>
          </Box>
          <Box flex="1" textAlign="center" marginInline="100">
          <LineChart width={650} height={250} data={overallSocialHousingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="# on Waiting List" stroke="#8884d8" />
          </LineChart>
            <Text>Number of people on waitlist for Social Housing</Text>
          </Box>
        </Flex>
      </Container>

        <Flex flexDirection="row">
          <Heading margin="5" fontSize="3xl">Specific Neighbourhood Data</Heading>
          <Select placeholder="Select neighbourhood" onChange={onChangeNeighbourhood}>
            {torontoSocialHousingData.map((element) => {
              return (
                <option value={element['Neighbourhood Id']}>{element.Neighbourhood}</option>
              )
            })}
          </Select>
        </Flex>
        
      

      <myMap/>
      {/* <BarGraph dataset={torontoSocialHousingData} xdatakey="Neighbourhood" ydatakey="Social Housing Waiting List"/> */}

    </Container>
  )
}

export default TorontoPage