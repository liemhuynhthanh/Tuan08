import React, { useState, useEffect } from 'react';
import MetricCard from '../components/MetricCard';
import DataTable from '../components/DataTable.jsx';
import EditUserModal from '../components/EditUserModal';
import AddUserModal from '../components/AddUserModal';
import { fetchCustomers, updateCustomer, addCustomer } from '../api/Customer.jsx';
import daidien from '../assets/daidien.jpg';
import Overview from '../api/Overview.jsx';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  
  useEffect(() => {
    const getCustomers = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCustomers();
        setCustomers(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch customers');
        setIsLoading(false);
      }
    };
    
    getCustomers();
  }, []);
  
  const handleEditClick = (customer) => {
    setCurrentCustomer(customer);
    setShowEditModal(true);
  };
  
  const handleCloseModal = () => {
    setShowEditModal(false);
    setShowAddModal(false);
  };
  
  const handleUpdateCustomer = async (updatedCustomer) => {
    try {
      await updateCustomer(String(updatedCustomer.id), updatedCustomer);

 // ← chỉ truyền 1 object
      setCustomers(
        customers.map(customer => 
          customer.id === updatedCustomer.id ? updatedCustomer : customer
        )
      );
      setShowEditModal(false);
    } catch (err) {
      setError('Failed to update customer');
    }
  };
  
  
  const handleAddCustomer = async (newCustomer) => {
    try {
      const addedCustomer = await addCustomer(newCustomer);
      setCustomers([...customers, addedCustomer]);
      setShowAddModal(false);
    } catch (err) {
      setError('Failed to add customer');
    }
  };
  
  const columns = [
    {
      id: 'name',
      header: 'CUSTOMER NAME',
      accessor: (row) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={row.avatar} alt={row.customerName} className="w-full h-full object-cover" />
          </div>
          <span>{row.customerName}</span>
        </div>
      ),
    },
    {
      id: 'company',
      header: 'COMPANY',
      accessor: 'companyName',
    },
    {
      id: 'orderValue',
      header: 'ORDER VALUE',
      accessor: (row) => `$${row.orderValue}`,
    },
    {
      id: 'orderDate',
      header: 'ORDER DATE',
      accessor: 'orderDate',
    },
    {
      id: 'status',
      header: 'STATUS',
      accessor: (row) => {
        const statusColors = {
          'New': 'text-blue-500 bg-blue-100',
          'In-progress': 'text-yellow-500 bg-yellow-100',
          'Completed': 'text-green-500 bg-green-100'
        };
        const colorClass = statusColors[row.status] || 'text-gray-500 bg-gray-100';
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
            {row.status}
          </span>
        );
      },
    },
    {
      id: 'actions',
      header: '',
      accessor: (row) => (
        <button className="text-gray-500 hover:text-blue-500" onClick={() => handleEditClick(row)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
      ),
    },
  ];
  
  return (
    <div className="space-y-6">
     
        <Overview/>
      
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Detailed report
          </h2>
          <div className="flex gap-2">
            <button 
              className="flex items-center gap-1 px-3 py-1 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50"
              onClick={() => setShowAddModal(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Import
            </button>
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Export
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-blue-500"></div>
            <p className="mt-2 text-gray-500">Loading...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">{error}</div>
        ) : (
          <DataTable 
            columns={columns}
            data={customers}
            totalResults={customers.length}
          />
        )}
      </div>
      
      {showEditModal && (
        <EditUserModal
          customer={currentCustomer}
          onClose={handleCloseModal}
          onUpdate={handleUpdateCustomer}
        />
      )}
      
      {showAddModal && (
        <AddUserModal
          onClose={handleCloseModal}
          onAdd={handleAddCustomer}
        />
      )}
    </div>
  );
};

export default Dashboard;