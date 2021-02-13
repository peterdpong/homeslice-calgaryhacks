import './App.css';
import NavBar from "./components/navbar/NavBar"
import { Container, Heading, Text, Button, Box } from '@chakra-ui/react'
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Container centerContent>
              <Heading fontSize="5xl">Welcome to HomeSlice.</Heading>
              <Text fontSize="lg">Visualizing housing data to tackle housing problems in Canada. </Text>
              <Button size="lg" m="5">Explore cities</Button>
            </Container>

            <Box m="5">
                <Heading fontSize="3xl" marginBottom="2">About the problem</Heading>
                <Box borderRadius="lg" bgColor="gray.100" padding="5">
                  <Text fontSize="lg">INFO ABOUT Problem</Text>
                </Box>
            </Box>

            <Box m="5">
                <Heading fontSize="3xl" marginBottom="2">HomeSlice's goal</Heading>
                <Box borderRadius="lg" bgColor="gray.100" padding="5">
                  <Text fontSize="lg">INFO ABOUT Solution</Text>
                </Box>
            </Box>
          </Route>
          
          <Route path="/toronto">

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
