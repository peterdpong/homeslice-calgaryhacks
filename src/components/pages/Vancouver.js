import React from 'react'
import { Container, Heading, Flex, Box, Text, Image } from '@chakra-ui/react'
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts'
import data from '../../Datasets/NonMarketHousingVancouver.json'
import BarGraph from '../data/BarGraph'

const VancouverPage = () => {
  const COLORS = ["#3182CE", "#EF5350", "#00E676", "#5E35B1"]
  var projectsData = [
    {
      "name": "Projects Completed",
      "value": 0
    },
    {
      "name": "Projects Under Construction",
      "value": 0
    },
    {
      "name": "Projects Approved",
      "value": 0
    },
    {
      "name": "Projects Proposed",
      "value": 0
    }
  ]

  var clientData = [
    {
      "name": "Families",
      "value": 0
    },
    {
      "name": "Seniors",
      "value": 0
    },
    {
      "name": "Others",
      "value": 0
    }
  ]

  var yearInfo = []

  data.forEach((element) => {
    if(element.fields.project_status == "Completed"){
      projectsData[0].value++;
    } else if(element.fields.project_status == "Under Construction") {
      projectsData[1].value++;
    } else if (element.fields.project_status == "Approved") {
      projectsData[2].value++;
    } else {
      projectsData[3].value++;
    }
    clientData[0].value += element.fields.clientele_families;
    clientData[1].value += element.fields.clientele_seniors;
    clientData[2].value += element.fields.clientele_other;

    var obj = yearInfo.find((o, i) => {
      if (o.year === element.fields.occupancy_year && element.fields.occupancy_year != undefined) {
        yearInfo[i] = {"year": element.fields.occupancy_year, "count": o.count + 1};
        return true; // stop searching
      }
    })
    if(obj == undefined && element.fields.occupancy_year != undefined){
      yearInfo.push({
        "year": element.fields.occupancy_year,
        "count": 1
      })
      return true;
    }
  })


  return (
    <div>
    <Container marginBottom="10" centerContent>
      <Image
            w = '500px' mx = 'auto' my = {-50}
            src = './vancouverSil.png'
            />
      <Heading fontSize="4xl">Vancouver Housing Overview</Heading>
    </Container>
    <Flex flexDirection="row" marginInline="5rem">
      <Box flex="1" textAlign="center">
        <ResponsiveContainer width="90%" height="90%">
          <PieChart  margin={{ top: 0, left: 0, right: 0, bottom: 0 }} width={350} height={350}>
            <Tooltip />
            <Legend />
            <Pie data={projectsData} dataKey="value" nameKey="name" outerRadius={100} fill="#3182CE"> 
              {data.map((entry, index) => <Cell fill={COLORS[index]}/>)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <Text fontSize="xl">Non-Social Housing Projects</Text>
      </Box>
      <Box flex="1" textAlign="center">
        <ResponsiveContainer width="90%" height="90%">
          <LineChart width={350} height={250} data={yearInfo}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <Text fontSize="2xl"># of Non-Social Housing Opened</Text>
      </Box>
      <Box flex="1" textAlign="center">
        <BarGraph dataset={clientData} xKey="name" barKey="value" width={600}/>
        <Text>Category of people who use these homes</Text>
      </Box>
    </Flex>

    

    </div>
  )
}

export default VancouverPage