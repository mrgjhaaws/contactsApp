import axios from 'axios';

// Set VITE_API_URL in frontend/.env (local) or in Vercel (production)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const getContacts = (search = '') =>
  axios.get(`${API_URL}/contacts`, { params: search ? { search } : {} });
export const addContact = (data) => axios.post(`${API_URL}/contacts`, data);
export const updateContact = (id, data) => axios.put(`${API_URL}/contacts/${id}`, data);
export const deleteContact = (id) => axios.delete(`${API_URL}/contacts/${id}`);
