import React, { useState } from 'react';
import {torontoSocialHousingData, overallSocialHousingData} from '../../Datasets/SocialHousingData2011';
import { Container, Flex, Heading, Box, Text, Select, Center, Image, OrderedList, ListItem } from '@chakra-ui/react';
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Legend, Tooltip } from 'recharts'
import BarGraph from '../data/BarGraph';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import neighbourhoods from "../../Datasets/Neighbourhoods.json";

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
  var sortedWaitingList = [];

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
    sortedWaitingList.push({
      "name": current.Neighbourhood,
      "value": current['Social Housing Waiting List']
    });
  })

  sortedWaitingList.sort(function(a, b){return b.value - a.value});

  return (
    <div>
      <Container marginBottom="10" centerContent>
        <Image
            w = '500px' mx = 'auto' my = {-30}
            src = './torontoSil.png'
            />
        <Heading margin="2" fontWeight="extrabold" fontSize="4xl">Toronto Housing Overview</Heading> 
      </Container>
        <Flex flexDirection="row">
          <Box flex="1" my = {7} textAlign="center" marginInline="100">
            <Heading fontSize="3xl">{neighbourhoodsWithFiftyPercentDiff.length} / {torontoSocialHousingData.length}</Heading>
            <Text fontSize="2xl">Neighbourhoods with 50% more people on the waitlist than the number of housing units.</Text>
            <Heading fontSize="3xl" marginTop="50">${(sumAveragePrice / torontoSocialHousingData.length).toFixed(2)}</Heading>
            <Text fontSize="2xl">Average property price</Text>
          </Box>
          <Box flex="1" my = {7} textAlign="center" marginInline="100">
          <Heading fontSize="3xl">Top 5 Neighbourhood in need of Housing</Heading>
            <OrderedList>
              <ListItem><b>{sortedWaitingList[0].name}</b> <br/> WaitList Length: {sortedWaitingList[0].value}</ListItem>
              <ListItem><b>{sortedWaitingList[1].name}</b> <br/> WaitList Length: {sortedWaitingList[1].value}</ListItem>
              <ListItem><b>{sortedWaitingList[2].name}</b> <br/> WaitList Length: {sortedWaitingList[2].value}</ListItem>
              <ListItem><b>{sortedWaitingList[3].name}</b> <br/> WaitList Length: {sortedWaitingList[3].value}</ListItem>
              <ListItem><b>{sortedWaitingList[4].name}</b> <br/> WaitList Length: {sortedWaitingList[4].value}</ListItem>
            </OrderedList>
            
          </Box>
          <Box flex="1" my = {7} textAlign="center" marginInline="100">
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

        <Center>
          <Heading padding = "3" margin="3" fontSize="3xl">Specific Neighbourhood Data</Heading>
          <Select variant = "filled" onChange={onChangeNeighbourhood} padding = "2">
            {torontoSocialHousingData.map((element) => {
              return (
                <option key={element['Neighbourhood Id']} value={element['Neighbourhood Id']}>{element.Neighbourhood}</option>
              )
            })}
          </Select>
          </Center>
        
        <Flex>
          <MapContainer center={[43.7184038, -79.5181405]} zoom={11} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={neighbourhoods.features} onEachFeature={function(feature,layer) {return layer.bindPopup(feature.properties.AREA_NAME)}} />
          </MapContainer>
          <BarGraph dataset={dataParsed} id={neighbourhood}/>
        </Flex>
    </div>
  )
}

export default TorontoPage