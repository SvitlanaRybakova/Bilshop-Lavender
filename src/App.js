import Home from './pages/Home' 
import CarContextProvider from './contexts/CarContext'
import Carousel from "./components/Carousel";

function App() {
  return (
  <div className="App">
    <CarContextProvider>
      <Home/>
      <Carousel />
    </CarContextProvider>
  </div>
  )
}

export default App;
