import React from 'react'

export default function item_Detail() {
  const detailsData = [
    {
      logo: 'icon1.png',
      title: 'Item 1',
      position: 'Position 1',
      fares: '$50,000 per annum',
      expirationDate: '2023-10-15',
      documentType: 'Type A',
      website: 'https://www.example1.com',
    },
    {
      logo: 'icon2.png',
      title: 'Item 2',
      position: 'Position 2',
      fares: '$60,000 per annum',
      expirationDate: '2023-11-20',
      documentType: 'Type B',
      website: 'https://www.example2.com',
    },
    // Add more items as needed
  ];
    

  return (
    <div>
      {detailsData.map((item, index) => (
        <div
          key={index}
          style={{ boxShadow: '0px 0px 8px 0px gray' }}
          className='p-4 mb-4 rounded-lg'
        >
          <img
            src={item.logo}
            alt={`Logo for ${item.title}`}
            className='w-16 h-16 object-cover rounded-full'
          />
          <p className='font-semibold mt-2'>{item.title}</p>
          <p className='text-gray-600'>{item.position}</p>
          <p className='mt-1'>{item.fares}</p>
          <p className='mt-1'>Expires: {item.expirationDate}</p>
          <p className='mt-1'>Document Type: {item.documentType}</p>
          <a href={item.website} target='_blank' rel='noopener noreferrer' className='text-blue-500'>
            Visit Website
          </a>
        </div>
      ))}
    </div>
  );
}
