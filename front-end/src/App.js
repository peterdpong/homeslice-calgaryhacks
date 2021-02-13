import './App.css';
import NavBar from "./components/navbar/NavBar"
import { Container } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        Welcome to HomeSlice.
      </Container>

    </div>
  );
}

export default App;
