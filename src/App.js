<<<<<<< Updated upstream
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel />
    </div>
  );
=======
import Home from './pages/Home' 
import CarContextProvider from './contexts/CarContext'

function App() {
  return (
  <div className="App">
    <CarContextProvider>
      <Home/>
    </CarContextProvider>

  </div>
  )
>>>>>>> Stashed changes
}

export default App;
