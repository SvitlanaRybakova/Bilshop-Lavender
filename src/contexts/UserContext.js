import { createContext, useState } from 'react'

export const UserContext = createContext()

function UserContextProvider(props) {
    const [ userData, setUserData ] = useState({})

    const [userOrders, setUserOrders] = useState({
      userId: 1,
      orderHistory: [],
      firstname: "",
      lastname: "",
    })

    const addUserDataToContext = (data) => {
        setUserData(data)
    }

    const values = { 
        userData, 
        addUserDataToContext,
        userOrders,
        setUserOrders,
    }

    return (
        <UserContext.Provider value = {values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider