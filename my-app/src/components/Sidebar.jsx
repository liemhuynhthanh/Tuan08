import React from 'react';
import anh2 from '../assets/anh2.png'
import anh3 from '../assets/anh3.png'
function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
      <img src={anh3}></img>
        <h1 className="text-xl font-bold text-pink-500">Anonymous Monkey</h1>
        <h2 className="text-sm text-gray-500">DASHBOARD</h2>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Projects</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Teams</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Analytics</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Messages</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Insights</li>
        </ul>
      </nav>
      <div className="p-4 mt-auto">
        <div className="bg-blue-100 p-4 rounded-lg">
            <img src={anh2}></img>
          <p className="text-sm">V2.0 IS AVAILABLE</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Try now</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;