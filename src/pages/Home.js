import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarList from '../components/CarList';

function Home() {
    const { cars } = useContext(CarContext)
    
    return(
        <div>
            <CarList />
        </div>
    )
}

export default Home