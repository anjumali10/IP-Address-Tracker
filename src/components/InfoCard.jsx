import React from 'react'

const InfoCard = () => {
  return (
    <div className='flex flex-row gap-5 w-[80%] p-5 h-32 items-center justify-around z-10 absolute top-48 shadow-lg bg-white rounded-xl'>
        <div className='item1'>
            <p className='text-xs text-gray-500 font-bold uppercase'>IP Address</p>
            <p className='text-2xl font-bold'>192.212.174.101</p>
        </div>
        <div className="h-[80%] w-px bg-gray-300"></div>
        <div className='item1'>
            <p className='text-xs text-gray-500 font-bold uppercase'>Location</p>
            <p className='text-2xl font-bold'>Brooklyn, NY 1001</p>
        </div>
        <div className="h-[80%] w-px bg-gray-300"></div>
        <div className='item1'>
            <p className='text-xs text-gray-500 font-bold uppercase'>Time Zone</p>
            <p className='text-2xl font-bold'>UTC -05:00</p>
        </div>
        <div className="h-[80%] w-px bg-gray-300"></div>
        <div className='item1'>
            <p className='text-xs text-gray-500 font-bold uppercase'>ISP</p>
            <p className='text-2xl font-bold'>SpaceX Starlink</p>
        </div>
    </div>
  )
}

export default InfoCard