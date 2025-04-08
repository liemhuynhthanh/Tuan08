import React, { useState } from 'react';

const AddUserModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    avatar: '',
    customerName: '',
    companyName: '',
    orderValue: '',
    orderDate: '',
    status: 'New'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'orderValue' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newUser = {
        id: Date.now().toString(),
        customerName: formData.customerName,
        companyName: formData.companyName,
        orderValue: parseFloat(formData.orderValue),
        orderDate: formData.orderDate,
        status: formData.status,
        avatar:
          formData.avatar?.trim() ||
          `https://i.pravatar.cc/150?u=${formData.customerName.replace(/\s+/g, '')}`
      };

      await onAdd(newUser);
      onClose();
    } catch (error) {
      console.error('Error adding user:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Add New User</h2>
            <button onClick={onClose} disabled={isSubmitting} className="text-gray-500 hover:text-gray-800">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Avatar URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
              <input
                type="url"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                placeholder="https://example.com/avatar.jpg"
                className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Customer Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Order Value */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Order Value</label>
              <input
                type="number"
                name="orderValue"
                value={formData.orderValue}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Order Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Order Date</label>
              <input
                type="date"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                required
                className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="New">New</option>
                <option value="Completed">Completed</option>
                <option value="In-progress">In-progress</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm border rounded-md bg-white text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                {isSubmitting ? 'Adding...' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
