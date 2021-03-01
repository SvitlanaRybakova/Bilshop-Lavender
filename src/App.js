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
}

export default App;
