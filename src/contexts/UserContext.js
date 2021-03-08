import { createContext, useState } from 'react'

export const UserContext = createContext()

function UserContextProvider(props) {
    const [ userData, setUserInfo ] = useState(
        {
            firstName: 'Kamila',
            lastName: 'Jonson',
            email: 'k.jonson@mymail.com',
            city: 'Stockholm',
            posrcode: '12001',
            streetAddress: 'Kungsgatan 13 - 305',
            phone: '0708000307',
        }
    )

    const values = { 
        userData, 
    }

    return (
        <UserContext.Provider value = {values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider