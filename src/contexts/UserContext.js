import { createContext, useState } from 'react'

export const UserContext = createContext()

function UserContextProvider(props) {
    const [ userData, setUserData ] = useState(
        {
            userId: 1,
            firstName: 'Kamila',
            lastName: 'Jonson',
            email: 'k.jonson@mymail.com',
            city: 'Stockholm',
            postcode: '12001',
            streetAddress: 'Kungsgatan 13 - 305',
            phone: '0708000307',
        }
    )

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