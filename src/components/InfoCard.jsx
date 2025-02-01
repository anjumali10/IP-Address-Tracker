import React from 'react';

const InfoCard = ({ ipData }) => {
  return (
    <div className='flex flex-row gap-5 w-[80%] p-5 h-32 items-center justify-around z-10 absolute top-48 shadow-lg bg-white rounded-xl'>
      <div className='item1'>
        <p className='text-xs text-gray-500 font-bold uppercase'>IP Address</p>
        <p className='text-2xl font-bold'>{ipData?.ip || 'N/A'}</p>
      </div>
      <div className="h-[80%] w-px bg-gray-300"></div>
      <div className='item1'>
        <p className='text-xs text-gray-500 font-bold uppercase'>Location</p>
        <p className='text-2xl font-bold'>{`${ipData?.location?.city}, ${ipData?.location?.country}` || 'N/A'}</p>
      </div>
      <div className="h-[80%] w-px bg-gray-300"></div>
      <div className='item1'>
        <p className='text-xs text-gray-500 font-bold uppercase'>Time Zone</p>
        <p className='text-2xl font-bold'>{`UTC ${ipData?.location?.timezone}` || 'N/A'}</p>
      </div>
      <div className="h-[80%] w-px bg-gray-300"></div>
      <div className='item1'>
        <p className='text-xs text-gray-500 font-bold uppercase'>ISP</p>
        <p className='text-2xl font-bold'>{ipData?.isp || 'N/A'}</p>
      </div>
    </div>
  );
};

export default InfoCard;
