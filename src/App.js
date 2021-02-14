import './App.css';
import NavBar from "./components/navbar/NavBar"
import { Container, Flex, Heading, Text, Button, Box, Image, Center} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import TorontoPage from "./components/pages/Toronto";
import ExplorePage from './components/pages/Explore';
import VancouverPage from './components/pages/Vancouver';
import CalgaryPage from './components/pages/Calgary';

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
                  <Text fontSize="lg"> In major Canadian cities, there exists a rising issue of <Text as="b">unaffordable housing and homelessness. </Text>
                  Even though these are increasing problems within our society, there is a severe lack of social housing to help counter
                  these difficulties that many Canadians face.
                  </Text>
                </Box>
            </Box>

            <Box m="5">
                <Heading fontSize="3xl" marginBottom="2">HomeSlice's Goal</Heading>
                <Box borderRadius="lg" bgColor="gray.100" padding="5">
                  <Text fontSize="lg">The goal of HomeSlice is to allow for the <Text as="b">visualization of data</Text> that deals with the
                  growing rates of homelessness that plague Canadian communities. Our hope is that this will help municipal governments
                   to incorporate more social housing units by showing the neighbourhoods that desperately need them. 
                   HomeSlice uses open data from cities and parses the information in a way that allows for it to be easily displayed through the use of graphs and visuals. 
                   The purpose of HomeSlice is to make people aware of the common issue of homelessness and unaffordable housing in an effort to inspire action among local governments.
                   </Text>
                </Box>
            </Box>
          </Route>
          
          <Route path="/toronto">
            <TorontoPage/>
          </Route>
          <Route path="/vancouver">
            <VancouverPage/>
          </Route>
          <Route path="/calgary">
            <CalgaryPage/>
          </Route>
          <Route path="/explore">
            <ExplorePage/>
          </Route>
          
          

        </Switch>

      </div>
    </Router>
  );
}

export default App;
