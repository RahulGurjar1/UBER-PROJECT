import React, {createContext, useState} from 'react'
import PropTypes from 'prop-types';

export const userDataContext = createContext();

const UserContext = ({children}) => {

    const [user, setUser] = useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        }
    })
  return (
    <div>
        <userDataContext.Provider value={user}>
            {children}
        </userDataContext.Provider>
    </div>
  )
}
UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext
