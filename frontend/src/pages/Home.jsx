import React, { useState } from 'react'
import { gsap } from "gsap";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '65%',
        padding: 24,
        opacity: 1,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        opacity: 0,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen]);

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen]);

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanel]);

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehicleFound]);

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [waitingForDriver]);
  return (
    <div className='h-screen relative overflow-hidden'>
      <img
        className='w-20 absolute left-5 top-5'
        src='https://www.pngall.com/wp-content/uploads/4/Uber-Logo-PNG-Free-Image.png'
        alt='Uber Logo'
      />

      <div
        className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src='https://img.freepik.com/free-vector/taxi-app-interface-illustration_23-2148487606.jpg?t=st=1735486603~exp=1735490203~hmac=9a5a61e0dd6681c6ba227fb1c1d6e612c55a978975b0bfdbefae36ff1b852c58&w=740' alt='' />
      </div>
      <div className='h-screen absolute top-0 w-full flex flex-col justify-end'>
        <div className='bg-white h-[35%] p-6 relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => { setPanelOpen(!panelOpen) }}
            className='absolute opacity-0 top-6 right-16 text-3xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
            <input
              onClick={() => { setPanelOpen(true) }}
              value={pickup}
              onChange={(e) => { setPickup(e.target.value) }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-4'
              type='text'
              placeholder='Add a pick-up location'
            />
            <input
              onClick={() => { setPanelOpen(true) }}
              value={destination}
              onChange={(e) => { setDestination(e.target.value) }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
              type='text'
              placeholder='Enter your destination'
            />
          </form>
        </div>
        <div ref={panelRef} className='h-0 opacity-0 bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  )
}

export default Home
