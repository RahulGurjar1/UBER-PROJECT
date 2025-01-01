import React from 'react'

const LookingForDriver = () => {
  return (
    <div>
      <h5 onClick={() => {
        props.setVehicleFound(false);
      }}
        className='p-2 text-center w-[93%] absolute top-0 '><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>.
      <h3 className='text-2xl font-semibold mb-5'>Looking for Driver</h3>
      <div className='flex justify-between gap-2 items-center flex-col'>
        <div className='flex flex-row'>
          <img className='h-28' src='https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png' alt='' />
          <div className='w-full'>
            <div className='flex items-center gap-5 p-1 border-b-2'>
            <i className="text-lg ri-map-pin-user-line"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11A </h3>
                <p className='text-gray-600 -mt-1 text-sm'>Kankaria Talab, Ahemdabad</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-1 border-b-2'>
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11A </h3>
                <p className='text-gray-600 -mt-1 text-sm'>Kankaria Talab, Ahemdabad</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-1'>
            <i className="text-lg ri-currency-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>Rs. 193.20</h3>
                <p className='text-gray-600 -mt-1 text-sm'>Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver
