import React from 'react';

function Header() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
        
      <h2 className="text-lg font-semibold text-pink-500 text-3xl font-bold">DashBoard</h2>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg p-2 w-[500px]"
        />
        <div className="flex items-center space-x-2">
          <span>VoAn</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;