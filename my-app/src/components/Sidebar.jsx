import React from 'react';
import { NavLink } from 'react-router-dom';
import anh2 from '../assets/anh2.png'; // Adjust the path as necessary
const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg flex flex-col h-full">
      <div className="p-4 flex items-center gap-2">
        <span className="text-pink-500">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="10" r="8" fill="#FF385C" />
            <circle cx="7" cy="20" r="6" fill="#4285F4" />
            <circle cx="23" cy="20" r="6" fill="#FBBC05" />
          </svg>
        </span>
        <span className="text-xl font-bold">Logo</span>
      </div>
      
      <nav className="flex-1 px-2 py-4">
        <NavLink to="/" className={({isActive}) => 
          isActive 
            ? "flex items-center gap-2 p-3 text-pink-500 bg-pink-100 rounded-lg mb-2" 
            : "flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
        }>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink to="/projects" className={({isActive}) => 
          isActive 
            ? "flex items-center gap-2 p-3 text-pink-500 bg-pink-100 rounded-lg mb-2" 
            : "flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
        }>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Projects</span>
        </NavLink>
        
        <NavLink to="/teams" className={({isActive}) => 
          isActive 
            ? "flex items-center gap-2 p-3 text-pink-500 bg-pink-100 rounded-lg mb-2" 
            : "flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
        }>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Teams</span>
        </NavLink>
        
        <NavLink to="/analytics" className={({isActive}) => 
          isActive 
            ? "flex items-center gap-2 p-3 text-pink-500 bg-pink-100 rounded-lg mb-2" 
            : "flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
        }>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <span>Analytics</span>
        </NavLink>
        
        <NavLink to="/messages" className={({isActive}) => 
          isActive 
            ? "flex items-center gap-2 p-3 text-pink-500 bg-pink-100 rounded-lg mb-2" 
            : "flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
        }>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Messages</span>
        </NavLink>
        
        <NavLink to="/integrations" className={({isActive}) => 
          isActive 
            ? "flex items-center gap-2 p-3 text-pink-500 bg-pink-100 rounded-lg mb-2" 
            : "flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
        }>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span>Integrations</span>
        </NavLink>
      </nav>
      
      <div className="mt-auto p-4">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="mb-2">
            <img src={anh2} alt="Version 2.0" className="mx-auto" />
          </div>
          <h3 className="text-lg font-semibold mb-2">V2.0 is available</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Try now</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;