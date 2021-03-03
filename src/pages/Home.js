import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import Carousel from "../components/Carousel";
import CarList from '../components/CarList';
import Filter from '../components/Filter';


function Home() {
    const { cars } = useContext(CarContext)
    
    return(
        <div>
            <Carousel />
            <CarList />
            <Filter/>
        </div>
    )
}

export default Home