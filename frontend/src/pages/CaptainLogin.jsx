import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setcaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setcaptainData({ email, password })
    setEmail('')
    setPassword('')
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
    
    {/* Content */}
    <div className="relative flex flex-col items-center justify-center h-full z-10 p-7">
      <div className="w-[400px] backdrop-blur-md bg-white rounded-xl shadow-lg p-8 flex flex-col">
        <div className="flex justify-center mb-6">
          <img
            className="w-40"
            src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
            alt="Uber Logo"
          />
        </div>
      
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
        >
          <h3 className="text-lg mb-2 font-semibold">What's your Email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded mb-2 p-2 w-full"
            placeholder="Email"
          />
          <h3 className="text-lg mb-2 font-semibold">Enter your Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded mb-4 p-2 w-full"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 mb-3 w-full text-lg">
            Login
          </button>
        </form>
        <p className="text-center">
          New Here?{' '}
          <Link to="/captain-signup" className="text-blue-600">
            Create New Account as Captain
          </Link>
        </p>
        <div className="mt-auto">
          <Link
            to="/login"
            className="bg-blue-700 text-white flex items-center justify-center font-semibold rounded px-4 py-2 w-full text-lg mt-4"
          >
            Sign In as User
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CaptainLogin