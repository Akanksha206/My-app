import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

export const getStores = async () => {
  const response = await axios.get(`${API_URL}/stores`);
  return response.data;
};

export const rateStore = async (storeId, rating) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/stores/${storeId}/rate`, { rating }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
