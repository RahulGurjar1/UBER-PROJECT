import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setVehiclePanelOpen(false);
            }}
                className='p-2 text-center w-[93%] absolute top-0 '><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true);
                props.setVehiclePanelOpen(false);
            }}
                className='flex p-3 border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full  justify-between items-center'>
                <img className='h-20' src='https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png' alt='' />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>Rs.193.20</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true);
                props.setVehiclePanelOpen(false);
            }}
                className='flex p-3 border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full  justify-between items-center'>
                <img className='h-20' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' alt='' />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>1 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable motorcycle ride</p>
                </div>
                <h2 className='text-lg font-semibold'>Rs.93.20</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true);
                props.setVehiclePanelOpen(false);
            }}
                className='flex p-3 border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full  justify-between items-center'>
                <img className='h-20' src='https://th.bing.com/th/id/OIP.gERohywpalGF3NjolmHt5wHaE7?rs=1&pid=ImgDetMain' alt='' />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Sabse sasta Auto ride</p>
                </div>
                <h2 className='text-lg font-semibold'>Rs.113.20</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
