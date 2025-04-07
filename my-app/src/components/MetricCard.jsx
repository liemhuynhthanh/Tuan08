import React from 'react';

const MetricCard = ({ title, value, change, icon, color }) => {
  return (
    // Option 2: Use a ternary operator with default value
<div className={`rounded-lg shadow p-4 ${color ? color : 'bg-white'}`}>
      <div className="flex justify-between items-start">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="text-2xl font-bold mt-1">{value}</div>
          <div className="flex items-center mt-2 text-xs">
            <span className={change >= 0 ? 'text-green-500 flex items-center' : 'text-red-500 flex items-center'}>
              {change >= 0 ? '▲' : '▼'} {Math.abs(change)}%
            </span>
            <span className="ml-1 text-gray-500">period of change</span>
          </div>
        </div>
        <div className={`p-2 ml-30 rounded-full ${color}`}>
          {icon === 'shop' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
          )}
          {icon === 'dollar' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          )}
          {icon === 'users' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default MetricCard;