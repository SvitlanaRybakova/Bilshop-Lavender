import { createContext, useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';

export const UserContext = createContext()

function UserContextProvider(props) {
    const [ userData, setUserData ] = useState({})

    const [userOrders, setUserOrders] = useState({
      userId: 1,
      orderHistory: [],
      firstname: "",
      lastname: "",
    })
    const history = useHistory()

    const [userOrderHistoryBoolean, setUserOrderHistoryBoolean] = useState(false);

    const addUserDataToContext = (data) => {
        setUserData(data)
    }

    useEffect(() => {
      if (localStorage.getItem("orders") !== null) {
        setUserOrders(JSON.parse(localStorage.getItem("orders")));
      }
    }, [])

    const orderHistory = (purchases) => {
      setUserOrders(previousState => ({
        orderHistory: [...previousState.orderHistory, purchases]
      }));
      setUserOrderHistoryBoolean(true);
    }

    useEffect(() => { 
      if(userOrderHistoryBoolean === true){
      localStorage.setItem("orders", JSON.stringify(userOrders));
      setUserOrderHistoryBoolean(false);
      history.push('/shopping-cart/checkout/confirmation')
      }
    }, [userOrderHistoryBoolean])

    const values = { 
        userData, 
        addUserDataToContext,
        userOrders,
        setUserOrders,
        orderHistory,
    }

    return (
        <UserContext.Provider value = {values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider