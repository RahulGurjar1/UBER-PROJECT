import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className='flex items-center justify-evenly mb-2'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src='https://th.bing.com/th/id/OIP.xegKaDaPHyYcm7yvlFMo3wHaLH?rs=1&pid=ImgDetMain' alt='' />
                    <h4 className='text-lg font-medium'>Nitin Panday Ji Driver</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>Rs. 2000.09</h4>
                    <p className='text-sm font-medium text-gray-600'>Earned Today</p>
                </div>

            </div>
            <div className='flex justify-evenly p-3 bg-gray-100 rounded-xl'>
                <div className='text-center'>
                    <i className="text-3xl font-thin ri-time-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
