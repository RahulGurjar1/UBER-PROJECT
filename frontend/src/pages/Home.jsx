import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative h-screen w-full bg-white">
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
      
      {/* Centered content */}
      <div className="relative flex flex-col items-center justify-center h-full z-10">
        <div className="backdrop-blur-md bg-white/30 p-8 rounded-xl shadow-lg w-[400px]">
          <div className='flex justify-center'>
            <img
              className="w-48 mb-6"
              src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png.png"
              alt="Uber Logo"
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-3xl mb-4 text-white drop-shadow-lg">
              Get Started with Us
            </h2>
            <Link
              to="/login"
              className="flex items-center justify-center w-full bg-black hover:bg-black/80 text-white py-3 rounded transition-all"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home