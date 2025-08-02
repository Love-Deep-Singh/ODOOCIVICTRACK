import axios from 'axios'

export const registerUser = async (data) => {
  const response = await axios.post('http://localhost:3000/api/auth/register', data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post('http://localhost:3000/api/auth/login', data);
  return response.data;
};
