import React from 'react'

const LocationSearchPanel = (props) => {

  const locations = [
    "2A, Ayush Gurjar Home, Raghav World School, Chomu",
    "4A, Ayush Home, Raghav World School, Chomu, Jaipur",
    "6A, Ayush Home, Apex International School, Chomu, Jaipur",
    "10A, Ayush Home, Apex International School, Chomu, Jaipur",
  ]
  return (
    <div>

      {
        locations.map(function (elem, index) {
          return <div onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
            key={index} className='flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start '>
            <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'>
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className='font-medium '>{elem}</h4>
          </div>
        })

      }

    </div>

  )
}

export default LocationSearchPanel
