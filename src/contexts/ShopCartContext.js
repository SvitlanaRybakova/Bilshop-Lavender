import { createContext, useState } from 'react'

export const ShopCartContext = createContext()

function ShopCartContextProvider(props) {
    const [ purchases, setPurchases ] = useState(
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
                  {
                    "make": "Pontiac",
                    "model": "Montana SV6",
                    "year": 2006,
                    "vin": "JN1CV6FE7DM360307",
                    "city": "Jāsim",
                    "descShort": "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam",
                    "descLong": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
                    "price": 299379,
                    "miles": 12346
                  },
            ],
            deliveryCost: 0, 
            priceTotal: 'Choose delivery option'
        }
    )

    const setDeliveryCost = (e) => {
        purchases.deliveryCost = e.currentTarget.value === 'paidDelivery' ? 5000 : 0
        setPriceTotal()
    }

    function setPriceTotal() {
        let updatedTotalPrice = purchases.deliveryCost

        for (const product of purchases.products) {
            updatedTotalPrice += product.price
        }
        
        purchases.priceTotal = updatedTotalPrice
    }

    function deleteProduct(productToDelete) {
        const updateProducts = purchases.products.filter(product => product.vin !== productToDelete.vin )
        purchases.products = updateProducts
        if (purchases.products.length === 0)  {
            purchases.deliveryCost = 0
        }
        setPriceTotal()
    }

    const values = {
        purchases,
        setDeliveryCost,
        setPriceTotal,
        deleteProduct
    }

    return (
        <ShopCartContext.Provider value={values}>
            {props.children}
        </ShopCartContext.Provider>

    )
}

export default ShopCartContextProvider