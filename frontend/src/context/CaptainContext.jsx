import React, {createContext, useState, useContext} from 'react'


export const CaptainDataContext = createContext();

const UserContext = ({children}) => {

    const [captain, setCaptain] = useState(null);
    const [isloading, setIsloading] = useState(null);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    }
    // const [user, setUser] = useState({
    //     email:'',
    //     fullname:{
    //         firstname:'',
    //         lastname:''
    //     }
    // })

    const value = {
        captain, 
        setCaptain, 
        updateCaptain, 
        isloading, 
        setIsloading, 
        error, 
        setError}
  return (
    <div>
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    </div>
  )
}


export default UserContext
