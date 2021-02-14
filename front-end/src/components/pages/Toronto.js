import React, { useState } from 'react';
import {torontoSocialHousingData, overallSocialHousingData} from '../../Datasets/SocialHousingData2011';
import { Container, Flex, Heading, Box, Text, Select, Spacer } from '@chakra-ui/react';
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Legend, Tooltip } from 'recharts'
import BarGraph from '../data/BarGraph';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import neighbourhoods from "../../Datasets/Neighbourhoods.json"

const TorontoPage = () => {
  const [neighbourhood, setNeighbourhood] = useState(0);

  const onChangeNeighbourhood = (event) => {
    setNeighbourhood(event.currentTarget.value-1);
  }

  var neighbourhoodsWithFiftyPercentDiff = [];
  var sumAveragePrice = 0;
  var dataParsed = [
    {
      "statistic": "Rental Bank Applicants"
    },
    {
      "statistic": "Social Housing Units"
    },
    {
      "statistic": "# of families on waitlist for housing units"
    }
  ];

  torontoSocialHousingData.forEach((current) => {
    if(current['Social Housing Units'] == 0 && current['Social Housing Waiting List'] > 0){
      neighbourhoodsWithFiftyPercentDiff.push(current);
    } else if(current['Social Housing Waiting List'] / current['Social Housing Units'] > 0.5) {
      neighbourhoodsWithFiftyPercentDiff.push(current);
    }
    sumAveragePrice += current['Home Prices'];
    dataParsed[0][current["Neighbourhood Id"]] = current['Rent Bank Applicants']
    dataParsed[1][current["Neighbourhood Id"]] = current['Social Housing Units']
    dataParsed[2][current["Neighbourhood Id"]] = current['Social Housing Waiting List']
  })

  return (
    <div>
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

        <Flex marginInline="20rem" flexDirection="row">
          <Heading margin="5" fontSize="3xl">Specific Neighbourhood Data</Heading>
          <Select onChange={onChangeNeighbourhood}>
            {torontoSocialHousingData.map((element) => {
              return (
                <option key={element['Neighbourhood Id']} value={element['Neighbourhood Id']}>{element.Neighbourhood}</option>
              )
            })}
          </Select>
        </Flex>
        
        <Flex>
          <MapContainer center={[43.7184038, -79.5181405]} zoom={11} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={neighbourhoods.features}/>
          </MapContainer>
          <BarGraph dataset={dataParsed} id={neighbourhood}/>
        </Flex>

    </div>
  )
}

export default TorontoPage