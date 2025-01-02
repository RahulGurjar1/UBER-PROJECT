import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen relative overflow-hidden'>
            <Link to='/home' className='fixed right-3 top-3 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-3-line"></i>
            </Link>
            <div className='top-0'>
                <img className='h-full w-full object-cover' src='https://img.freepik.com/free-vector/taxi-app-interface-illustration_23-2148487606.jpg?t=st=1735486603~exp=1735490203~hmac=9a5a61e0dd6681c6ba227fb1c1d6e612c55a978975b0bfdbefae36ff1b852c58&w=740' alt='' />

            </div>
            <div className='absolute bottom-0 p-4 bg-white w-full'>
                <div className='flex justify-between gap-2 flex-col'>
                    <div className='flex flex-row'>
                        <div className='w-full flex flex-row justify-center items-center'>
                            <img className='h-24' src='https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png' alt='' />
                            <div className='text-right'>
                                <h2 className='text-lg font-medium'>Atul Auto Wala</h2>
                                <h4 className='font-bold text-xl -mt-2 -mb-1'>MP04 AB 1234</h4>
                                <p className='text-sm text-gray-600'>Maruti ka naya auto</p>
                            </div>
                        </div>
                        <div className='w-full'>
                            
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
                <div className='bg-green-600 flex justify-center items-center p-2 rounded-lg'>
                    <button>Make a Payment</button>
                </div>
                
            </div>
        </div>
    )
}

export default Riding
