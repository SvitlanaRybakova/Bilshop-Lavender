import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CarContextProvider from './contexts/CarContext';
import CarDetails from './pages/CarDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  return (
  <div className="App">
    <CarContextProvider>
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/shopping-cart" component={ShoppingCart}/>
      <Route exact path="/cars/:vin" component={CarDetails}/>
      <Route exact path="/shopping-cart/checkout" component={Checkout}/>
    </Router>
    </CarContextProvider>
  </div>
  );
}

export default App;