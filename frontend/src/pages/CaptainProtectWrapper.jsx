import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';


const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const [ isLoading, setIsLoading ] = useState(true);

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/captain-login');
    } else {
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            if (response.status === 200) {
              const data = response.data;
              setCaptain(data.captain);
              setIsLoading(false);
            }
          }).catch((error) => {
            console.error(error);
            localStorage.removeItem('token');
            navigate('/captain-login');
          });
    }
  }, [navigate]);

  

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

CaptainProtectWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CaptainProtectWrapper;