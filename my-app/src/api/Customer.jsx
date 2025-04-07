// src/api/customersApi.js

const API_URL = 'https://67f2d1deec56ec1a36d44e39.mockapi.io/reports';

// Fetch all customers
export const fetchCustomers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch customers');
    return await response.json();
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

// Add a new customer
export const addCustomer = async (customerData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customerData)
    });
    if (!response.ok) throw new Error('Failed to add customer');
    return await response.json();
  } catch (error) {
    console.error('Error adding customer:', error);
    throw error;
  }
};

// Update an existing customer
export const updateCustomer = async (customerData) => {
  try {
    const response = await fetch(`${API_URL}/${customerData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customerData)
    });
    if (!response.ok) throw new Error('Failed to update customer');
    return await response.json();
  } catch (error) {
    console.error('Error updating customer:', error);
    throw error;
  }
};

// Delete a customer
export const deleteCustomer = async (customerId) => {
  try {
    const response = await fetch(`${API_URL}/${customerId}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete customer');
    return { success: true, id: customerId };
  } catch (error) {
    console.error('Error deleting customer:', error);
    throw error;
  }
};
