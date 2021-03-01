import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import Carousel from "../components/Carousel";
import CarList from '../components/CarList';

function Home() {
    const { cars } = useContext(CarContext)
    
    return(
        <div>
            <Carousel />
            <CarList />
        </div>
    )
}

export default Home