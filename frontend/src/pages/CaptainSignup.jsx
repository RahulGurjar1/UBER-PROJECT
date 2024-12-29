import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [captainData, setCaptainData] = useState({})

  const navigate= useNavigate();
  const {captain, setCaptain} = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault()
    // console.log({ firstname, lastname, email, password }) // Logs current input
    const captainData= { 
      fullname:{
        firstname:firstname,
        lastname:lastname
      }, 
      email, 
      password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center p-7 bg-slate-50 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2024/04/GettyImages-671683070-1-1080x540.jpg')"
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative flex flex-col items-center justify-center h-full z-10 p-7 w-full">
        {/* Container with side-by-side (for md+) or stacked layout (small screens) */}
        <div className="w-[600px] bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row md:gap-6 md:items-start">
          {/* Logo on the left for larger screens, on top for small screens */}
          <div className="flex justify-center mt-28 flex-col items-center">
            <img
              className="w-40"
              src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
              alt="Uber Logo"
            />
            <p className="text-center text-sm">
              Already have an account?{' '}
              <Link to="/captain-login" className="text-blue-600">
                Login here
              </Link>
            </p>
          </div>

          {/* Form on the right for larger screens, below the logo for small screens */}
          <form className="md:w-2/3" onSubmit={submitHandler}>
            <h3 className="text-lg mb-1 font-semibold">Enter your name</h3>
            <div className='flex gap-2'>
              <input
                type='text'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="border bg-gray-100 border-gray-300 rounded mb-1 p-2 w-1/2"
                placeholder="Firstname"
              />
              <input
                type='text'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="border bg-gray-100 border-gray-300 rounded mb-1 p-2 w-1/2"
                placeholder="Lastname"
              />
            </div>

            <h3 className="text-lg mb-1 font-semibold">What's your email?</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border bg-gray-100 border-gray-300 rounded mb-1 p-2 w-full"
              placeholder="Email"
            />

            <h3 className="text-lg mb-1 font-semibold">Enter your Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border bg-gray-100 border-gray-300 rounded mb-2 p-2 w-full"
              placeholder="Password"
            />

            <h3 className="text-lg mb-1 font-semibold">Vehicle Details</h3>
            <div className="flex gap-2 ">
              <input
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="border bg-gray-100 border-gray-300 rounded mb-2 p-2 w-1/2"
                placeholder="Vehicle Color"
              />
              <input
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="border bg-gray-100 border-gray-300 rounded mb-2 p-2 w-1/2"
                placeholder="Vehicle Plate"
              />
            </div>
            <div className="flex gap-2 mb-2">
              <input
                type="number"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="border bg-gray-100 border-gray-300 rounded mb-1 p-2 w-1/2"
                placeholder="Vehicle Capacity"
              />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="border bg-gray-100 border-gray-300 rounded mb-1 p-2 w-1/2"
              >
                <option value="">Select Type</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>

            <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 mb-2 w-full text-lg">
              SignUp
            </button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
