import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import CarContextProvider from './contexts/CarContext'
import Carousel from "./components/Carousel";

function App() {
  return (
  <div className="App">
    <CarContextProvider>
      <Carousel />
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
    </Router>
    </CarContextProvider>
  </div>
  );
}

export default App;