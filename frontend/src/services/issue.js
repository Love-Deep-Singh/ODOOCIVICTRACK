import axios from 'axios';

const token = localStorage.getItem('token');
export const createIssue = async (data, token) => {
  const response = await axios.post('http://localhost:3000/api/issues', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export const getNearbyIssues = async ({ lat, lng, distance  }) => {
    console.log("Fetching nearby issues for coordinates:", { lat, lng, distance });
  const response = await axios.get('http://localhost:3000/api/issues/nearby', {
    params: {
      lat,
      lng,
      distance,

    },
  });
  console.log("Nearby issues fetched:", response.data);
  return response.data;
};