import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 onClick={() => {
        props.setWaitingForDriver(false);
      }}
        className='p-2 text-center w-[93%] absolute top-0 '><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>.
      
      <div className='flex justify-between gap-2 flex-col'>
        <div className='flex flex-row'>
          <div className='w-full flex flex-row justify-center items-center'>
          <img className='h-32' src='https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png' alt='' />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Atul Auto Wala</h2>
            <h4 className='font-bold text-xl -mt-2 -mb-1'>MP04 AB 1234</h4>
            <p className='text-sm text-gray-600'>Maruti ka naya auto</p>
          </div>
          </div>
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

export default WaitingForDriver
