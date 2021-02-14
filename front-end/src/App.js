import './App.css';
import NavBar from "./components/navbar/NavBar"
import { Container, Heading, Text, Button, Box, Image } from '@chakra-ui/react'
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
              <Heading fontSize="4xl">Welcome to HomeSlice.</Heading>
              <Text fontSize="md">Visualizing housing data to tackle housing problems in Canada. </Text>
              <Link to="/explore"> <Button colorScheme = "blue" size="lg" m="5">Explore cities</Button> </Link>
            </Container>

            <Image
            w = '500px' mx = 'auto' my = {-30}
            src = './houses.png'
            />

            <Box m="5">
                <Heading fontSize="3xl" marginBottom="2">About The Problem</Heading>
                <Box borderRadius="lg" bgColor="gray.100" padding="5">
                  <Text fontSize="lg">INFO ABOUT Problem</Text>
                </Box>
            </Box>
    
            

            <Box m="5">
                <Heading fontSize="3xl" marginBottom="2">HomeSlice's Goal</Heading>
                <Box borderRadius="lg" bgColor="gray.100" padding="5">
                  <Text fontSize="lg">INFO ABOUT Solution</Text>
                </Box>
            </Box>
          </Route>
          
          <Route path="/toronto">
            <TorontoPage/>
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/explore">
            <Text fontSize="lg">INFO ABOUT Solution</Text>
          </Route>
          
          

        </Switch>

      </div>
    </Router>
  );
}

export default App;
