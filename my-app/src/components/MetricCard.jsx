import React from 'react';

const MetricCard = ({ title, value, change, icon, color }) => {
  return (
    <div className={`rounded-lg shadow p-4 ${color ? color : 'bg-white'}`}>
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
        <div className={`p-2 ml-4 rounded-full ${color}`}>
          {icon === 'shop' && (
            <i className="fa fa-shopping-cart"></i> // Shopping Cart Icon
          )}
          {icon === 'dollar' && (
            <i className="fa fa-dollar-sign"></i> // Dollar Icon
          )}
          {icon === 'user' && (
            <i className="fa fa-user"></i> // User Icon
          )}
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
