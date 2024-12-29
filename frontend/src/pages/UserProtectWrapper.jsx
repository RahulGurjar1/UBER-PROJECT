import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { userDataContext } from '../context/UserContext';


const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const {user, setUser} = React.useContext(userDataContext);
  const [isLoading, setisLoading] = useState(true);
  
  const token = localStorage.getItem('token');
  useEffect(() => {
    
    if (!token) {
      navigate('/login');
    }
  });

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response)=>{
    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      setisLoading(false);
    }
  }).catch((error)=>{
    console.error(error);
    localStorage.removeItem('token');
    navigate('/login');
  });

  if(isLoading){
    return(
        <div>isLoading...</div>
    )
  }

  return (
    <>
      {children}
    </>
  )
}

UserProtectWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProtectWrapper;