import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {userDataContext} from '../context/UserContext'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  const navigate= useNavigate();

  const { user, setUser } = React.useContext(userDataContext);

  const submitHandler = async (e) => {
    e.preventDefault()
    // console.log({ firstname, lastname, email, password }) // Logs current input
    const newUser = { 
    fullname:{
      firstname:firstname,
      lastname:lastname
    }, 
    email, 
    password };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    

    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center p-7 bg-slate-50">
      <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2024/04/GettyImages-671683070-1-1080x540.jpg')"
      }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-40" />
    <div className="relative flex flex-col items-center justify-center h-full z-10 p-7">
      
      <div className="w-[400px] bg-white rounded-xl shadow-md p-8 flex flex-col">
        <div className="flex justify-center mb-6">
          <img
            className="w-28"
            src="https://www.pngall.com/wp-content/uploads/4/Uber-Logo-PNG-Free-Image.png"
            alt="Uber Logo"
          />
        </div>
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
        >
          <h3 className="text-lg mb-2 font-semibold">Enter your name</h3>
          <div className='flex gap-2'>
            <input
              type='text'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="border bg-gray-100 border-gray-300 rounded mb-2 p-2 w-1/2"
              placeholder="Firstname"
            />
            <input
              type='text'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="border bg-gray-100 border-gray-300 rounded mb-2 p-2 w-1/2"
              placeholder="Lastname"
            />
          </div>
          <h3 className="text-lg mb-2 font-semibold">Enter your Email</h3>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border bg-gray-100 border-gray-300 rounded mb-2 p-2 w-full"
            placeholder="Email"
          />
          <h3 className="text-lg mb-2 font-semibold">Enter your Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border bg-gray-100 border-gray-300 rounded mb-4 p-2 w-full"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 mb-3 w-full text-lg">
            SignUp
          </button>
        </form>
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
        <div className="mt-5">
         <p className='leading-tight text-[10px]'>By processing you consent to our <Link to="/terms" className="text-blue-600">Terms of Service</Link> and <Link to="/privacy" className="text-blue-600">Privacy Policy</Link>.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default UserSignup
