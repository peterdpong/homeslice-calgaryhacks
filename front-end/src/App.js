import './App.css';
import NavBar from "./components/navbar/NavBar"
import { Container, Flex, Heading, Text, Button, Box, Image, Center} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import TorontoPage from "./components/pages/Toronto";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Container centerContent>
              <Heading fontSize="4xl">Welcome to HomeSlice</Heading>
              <Text fontSize="md">Visualizing housing data to tackle housing problems in Canada. </Text>
              <Link to="/explore"> <Button colorScheme = "blue" size="lg" m="5"> <Search2Icon marginRight = "2" /> 
              Explore Cities</Button> </Link>
            </Container>

            <Image
            w = '500px' mx = 'auto' my = {-30}
            src = './houses.png'
            />

            <Box m="5">
                <Heading fontSize="3xl" marginBottom="2">About The Problem</Heading>
                <Box borderRadius="lg" bgColor="gray.100" padding="5">
                  <Text fontSize="lg"> In major Canadian cities, there exists a rising issue of <Text as="b">poverty and homelessness. </Text>
                  Even though these are increasing problems within our society, there is a severe lack of social housing to help counter
                  these difficulties that many Canadians face.
                  </Text>
                </Box>
            </Box>

            <Box m="5">
                <Heading fontSize="3xl" marginBottom="2">HomeSlice's Goal</Heading>
                <Box borderRadius="lg" bgColor="gray.100" padding="5">
                  <Text fontSize="lg">The goal of HomeSlice is to allow for the <Text as="b">visualization of data</Text> that deals with the
                  growing rates of homelessness that plague Canadian communities. Our hope is that this will influence municipal governments
                   to incorporate more social housing units in neighbourhoods that desperately need them. </Text>
                </Box>
            </Box>
          </Route>
          
          <Route path="/toronto">
            <TorontoPage/>
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/explore">
            
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

              <Button as="a" href="https://homeslice.tech/toronto" colorScheme = "blue"> 
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

              <Button as="a" href="https://homeslice.tech/toronto" colorScheme = "blue"> 
              Click here
              </Button>

              </Center>
            </Box>

            </Flex>

          </Route>
          
          

        </Switch>

      </div>
    </Router>
  );
}

export default App;
