import React from 'react'

const ConfirmRidePopUp = (props) => {
  return (
    <div>
            <h5 onClick={() => {
                props.setConfirmRidePopUpPanel(false);
            }}
                className='p-2 text-center w-[93%] absolute top-0 '><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>.
            <h3 className='text-2xl font-semibold mb-5 text-center mt-4'>Confirm Your Ride to Begin!</h3>
            <div className='flex items-center justify-evenly mt-1 p-3 bg-yellow-300 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src='https://th.bing.com/th/id/OIP.xegKaDaPHyYcm7yvlFMo3wHaLH?rs=1&pid=ImgDetMain' alt=''/>
                    <h4 className='text-lg font-medium'>Nitin Panday</h4>
                </div>
                <div>
                    <h5 className='text-lg font-semibold'>2.2 KM away</h5>
                </div>
            </div>
            <div className='flex justify-between gap-2 items-center flex-col mt-5'>
                <div className='p-2 w-full'>
                    <div className='flex flex-col gap-3 mb-3'>
                        <div className='flex items-center gap-5 p-1 border-b-2 pr-16 mr-16'>
                            <i className="text-lg ri-map-pin-user-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11A </h3>
                                <p className='text-gray-600 -mt-1 text-sm'>Kankaria Talab, Ahemdabad</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-1 border-b-2 pr-16 mr-16'>
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
                <div className='flex flex-col w-full gap-4'>
                    <button onClick={() => {
                        props.setConfirmRidePopUpPanel(false);
                        props.setRidePopUpPanel(false);
                    }}
                        className='w-full bg-green-600 text-white font-semibold rounded-lg p-2'>Confirm</button>
                    <button onClick={() => {
                        props.setConfirmRidePopUpPanel(false);
                        props.setRidePopUpPanel(false);
                    }}
                        className='w-full bg-red-600 text-white font-semibold rounded-lg p-2'>Cancel</button>
                </div>

            </div>
            
        </div>
  )
}

export default ConfirmRidePopUp
