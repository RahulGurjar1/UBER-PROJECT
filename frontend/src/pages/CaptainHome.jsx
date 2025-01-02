import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { gsap } from "gsap";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';


const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);

  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);


  useGSAP(function () {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [ridePopUpPanel]);

  useGSAP(function () {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePopUpPanel]);
  return (
    <div className='h-screen relative overflow-hidden'>
      <div className='fixed p-4 top-0 flex justify-between w-screen '>
        <img className='w-12' src='https://www.pngall.com/wp-content/uploads/4/Uber-Logo-PNG-Free-Image.png' alt=''/>
        <Link to='/home' className='h-5 w-5 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      
      <div className='top-0'>
        <img className='h-full w-full object-cover' src='https://img.freepik.com/free-vector/taxi-app-interface-illustration_23-2148487606.jpg?t=st=1735486603~exp=1735490203~hmac=9a5a61e0dd6681c6ba227fb1c1d6e612c55a978975b0bfdbefae36ff1b852c58&w=740' alt='' />

      </div>
      <div className='absolute bottom-0 p-4 bg-white w-full'>
        <CaptainDetails/>
      </div>
      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6'>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
      <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 translate-y-full bg-white bottom-0 px-3 py-6'>
        <ConfirmRidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome
