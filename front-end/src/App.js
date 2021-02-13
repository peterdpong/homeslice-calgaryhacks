import './App.css';
import NavBar from "./components/navbar/NavBar"
import { Container } from '@chakra-ui/react'
import BarGraph from './components/data/BarGraph'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        Welcome to HomeSlice.
      </Container>
      <BarGraph/>
      
    </div>
  );
}

export default App;
