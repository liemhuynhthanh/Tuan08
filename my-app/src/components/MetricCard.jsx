import React from 'react';

function MetricCard({ title, value, change }) {
  const isNegative = change.includes('-'); // Check if the change is negative
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className={`text-sm mt-1 ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
        {change}
      </p>
    </div>
  );
}

export default MetricCard;