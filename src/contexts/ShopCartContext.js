import { createContext, useState } from 'react'

export const ShopCartContext = createContext()

function ShopCartContextProvider(props) {
    const [ purchases, setPurchases ] = useState([
        {
            userId: 1,
            products: [
                {
                    "make": "Chevrolet",
                    "model": "Camaro",
                    "year": 1973,
                    "vin": "1D4PT5GK0BW487259",
                    "city": "Santa Rosa",
                    "descShort": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
                    "descLong": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
                    "price": 554963,
                    "miles": 15432
                  },
            ],
            deliveryCost: 5000, 
            priceTotal: 200000
        }
    ])

    const values = {purchases}

    return (
        <ShopCartContext.Provider value={values}>
            {props.children}
        </ShopCartContext.Provider>

    )
}

export default ShopCartContextProvider