import React, { useContext } from 'react'
import { CarContext } from '../contexts/CarContext'

function Home() {
    const { cars } = useContext(CarContext)
    console.log(cars);

    return(
        <div>
            This is Home component
        </div>
    )
}

export default Home