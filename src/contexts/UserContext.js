import { createContext, useState } from 'react'

export const UserContext = createContext()

function UserContextProvider(props) {
    const [ userData, setUserData ] = useState({})

    const addUserDataToContext = (data) => {
        setUserData(data)
    }

    const values = { 
        userData, 
        addUserDataToContext
    }

    return (
        <UserContext.Provider value = {values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider