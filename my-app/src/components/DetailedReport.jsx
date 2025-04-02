import React, { useState } from 'react';

function DetailedReport() {
  // Sample data for the table
  const reportData = [
    { name: 'Elizabeth Lee', company: 'Avatar Systems', value: '$594', date: '10/07/2023', status: 'New' },
    { name: 'Carlos Garcia', company: 'SmoothShift', value: '$647', date: '24/07/2023', status: 'New' },
    { name: 'Elizabeth Bailey', company: 'PR The Time Telecom', value: '$594', date: '09/08/2023', status: 'In progress' },
    { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$594', date: '31/08/2023', status: 'In progress' },
    { name: 'Ashley Adams', company: 'FlowRush', value: '$922', date: '10/08/2023', status: 'Completed' },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const totalPages = Math.ceil(reportData.length / itemsPerPage);

  // Calculate the data to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = reportData.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Detailed Report</h3>
        <div className="space-x-2">
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg">Import</button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">Export</button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500">
            <th className="p-2">
              <input type="checkbox" />
            </th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Company</th>
            <th className="p-2">Order Value</th>
            <th className="p-2">Order Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">
                <input type="checkbox" />
              </td>
              <td className="p-2 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span>{item.name}</span>
              </td>
              <td className="p-2">{item.company}</td>
              <td className="p-2">{item.value}</td>
              <td className="p-2">{item.date}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    item.status === 'New'
                      ? 'bg-blue-100 text-blue-600'
                      : item.status === 'In progress'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">{reportData.length} Inc.</p>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-100 rounded-lg"
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === index + 1 ? 'bg-pink-500 text-white' : 'bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-100 rounded-lg"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailedReport;