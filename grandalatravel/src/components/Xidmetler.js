import React from 'react';

const services = [
  "Air Tickets 24/7",
  "Villa & Vip House",
  "Hotel",
  "Tours",
  "Sanatorium",
  "Visa Support",
  "Transportation",
  "Transfer Service",
  "Rent a car",
  "Cargo transportation",
];

const XidmetlerPage = () => {
  return (
    <div>
      <h2 style={{ color: '#0B2546' ,marginLeft:25,marginBottom:10}}>Xidmətlər</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {services.map((service, index) => (
          <li
            key={index}
            style={{
              width: '95%',
              marginLeft:25,
              backgroundColor: '#0B2546',
              color: 'white',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '8px',
            }}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XidmetlerPage;
