import React from 'react'
import { Container, Flex, Box, Center, Text, Image, Heading, Link, Button } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const ExplorePage = () => {
  return(
    <div>
      
      <Center fontSize='lg' padding="5">
      HomeSlice currently offers our service to 3 cities in Canada, hoping to expand more in the near future.
      Click below to go to the City's Data Page.
      </Center>

        <Flex color="white" padding="2">

        <Box variant="Outline" flex="1" bg="#CBD5E0" borderRadius="lg" padding="3" margin="2">
          <Center fontWeight="bold" color="Black" padding="1">
            TORONTO
          </Center>

          <Image src="toronto.png" padding="1"/>

          <Text padding="1" color="black">
            Capital of Ontario, the largest city in Canada. 
          </Text>
          <Text padding="1" color="black"> <Text as="b"> Population:</Text> 2.93 Million</Text>
          <Text padding="1" color="black"> <Text as="b"> Area:</Text> 630.2 km squared</Text>

          <Center padding="3">

          <Button as="a" href="https://homeslice.tech/toronto" colorScheme = "blue"> 
          Click here
          </Button>
          
          </Center>

        </Box>

        <Box flex="1" bg="#CBD5E0" borderRadius="lg" padding="3" margin="2">
          <Center fontWeight="bold" color="Black" padding="1">
            VANCOUVER
          </Center>
          <Image src="vancouver.png" padding="1"/>
          <Text padding="1" color="black">
            Where the ocean meets the mountains. 
          </Text>
          <Text padding="1" color="black"> <Text as="b"> Population:</Text> 0.7 Million</Text>
          <Text padding="1" color="black"> <Text as="b"> Area:</Text> 115 km squared</Text>

          <Center padding="3">

          <Button as="a" href="https://homeslice.tech/vancouver" colorScheme = "blue"> 
          Click here
          </Button>

          </Center>
        </Box>

        <Box flex="1" bg="#CBD5E0" borderRadius="lg" padding="3" margin="2">
          <Center fontWeight="bold" color="Black" padding="1">
            CALGARY
          </Center>
          <Image src="calgary.png" padding="1"/>
          <Text padding="1" color="black">
            Alberta's biggest city, as well as Canada's sunniest.
          </Text>
          <Text padding="1" color="black"> <Text as="b"> Population:</Text> 1.3 Million</Text>
          <Text padding="1" color="black"> <Text as="b"> Area:</Text> 825.3 km squared</Text>

          <Center padding="3">

          <Button as="a" href="https://homeslice.tech/calgary" colorScheme = "blue"> 
          Click here
          </Button>

          </Center>
        </Box>

      </Flex>
    </div>
  )
}

export default ExplorePage